import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "../components/Card";
import Layout from "../components/Layout";
import { LoadingAnimation, SkeletonLoading } from "../components/Loader";
import Carousel from "../components/Carousel";
import { MovieType } from "../utils/types/movie";
import { useTitle } from "../utils/hooks/useTitle";

const Index = () => {
  useTitle("CINEMAX - Now Playing Movie");
  const [datas, setDatas] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);

  useEffect(() => {
    fetchData(1);
  }, []);

  function fetchData(page: number) {
    axios
      .get(
        `now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=${page}`
      )
      .then((data) => {
        const { results, total_pages } = data.data;
        //console.log(data);
        setDatas(results);
        setTotalPage(totalPage);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  function nextPage() {
    const newPage = page + 1;
    setPage(newPage);
    fetchData(newPage);
  }

  function prevPage() {
    const newPage = page - 1;
    setPage(newPage);
    fetchData(newPage);
  }

  function handleFavorite(data: MovieType) {
    const getMovies = localStorage.getItem("FavMovie");

    if (getMovies) {
      let parseFav: MovieType[] = JSON.parse(getMovies);
      const movieExist = parseFav.find((item) => item.id === data.id);

      if (movieExist) {
        alert("Movie already on Favorite");
      } else {
        parseFav.push(data);
        localStorage.setItem("FavMovie", JSON.stringify(parseFav));
      }
    } else {
      localStorage.setItem("FavMovie", JSON.stringify([data]));
    }
    alert("Movie added to Favorite");
  }

  return (
    <Layout>
      {!loading && (
        <Carousel
          datas={datas.slice(0, 5)}
          content={(data) => (
            <div
              className="w-full h-full flex justify-center items-center bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(https://image.tmdb.org/t/p/original${data.poster_path})`,
              }}
            >
              <p className="text-white tracking-widest font-bold break-words text-2xl">
                {data.title}
              </p>
            </div>
          )}
        />
      )}
      <div className="mx-12 pt-10 pb-5">
        <h2 className="font-extrabold text-2xl text-center">NOW PLAYING</h2>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {loading
          ? [...Array(20).keys()].map((data) => <LoadingAnimation key={data} />)
          : datas.map((data: MovieType) => (
              <Card
                key={data.id}
                title={data.title}
                image={data.poster_path}
                id={data.id}
                labelButton="ADD TO FAVORITE"
                onClickFav={() => handleFavorite(data)}
              />
            ))}
      </div>
      <div className="btn-group w-full justify-center pt-10">
        <button
          className="btn"
          onClick={() => prevPage()}
          disabled={page === 1}
        >
          «
        </button>
        <button className="btn">{page}</button>
        <button
          className="btn"
          onClick={() => nextPage()}
          disabled={page === totalPage}
        >
          »
        </button>
      </div>
    </Layout>
  );
};

export default Index;
