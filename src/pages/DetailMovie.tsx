import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";

import { LoadingAnimation } from "../components/Loader";
import Layout from "../components/Layout";
import { MovieType } from "../utils/types/movie";
import { useTitle } from "../utils/hooks/useTitle";

const DetailMovie = () => {
  const { id_movie } = useParams();
  const [data, setData] = useState<MovieType>({});
  const [loading, setLoading] = useState<boolean>(true);
  useTitle(`${data.title}-CINEMAXI`);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id_movie}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`,
      { method: "GET" }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => setLoading(false));
  }

  return (
    <Layout>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <div className="hero min-h-screen bg-base-200 mx-auto items-center">
          <div className="w-full bg-cover bg-center bg-no-repeat">
            <img
              src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
              className="opacity-40 w-screen"
            />
          </div>
          <div className="hero-content flex-col lg:flex-row justify">
            <div className="card card-side backdrop-blur-xl shadow-xl items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                className="w-1/4 h-1/4 shadow-2xl mx-10 my-10 "
              />
              <div className="'mx-14 my-14'">
                <h1 className="text-5xl font-bold">{data.title}</h1>
                <p className="pt-2 text-lg font-semibold">
                  Ratings:{" "}
                  <span className="text-lg font-normal">
                    {data.vote_average}
                  </span>
                </p>
                <p className="pt-1 text-lg font-semibold">
                  Release:{" "}
                  <span className="text-lg font-normal">
                    {data.release_date}
                  </span>
                </p>
                <p className="pt-1 text-lg font-semibold">
                  Genre:{" "}
                  <span className="text-lg font-normal">
                    {" "}
                    {data.genres
                      ?.map((genre) => {
                        return genre.name;
                      })
                      .join(", ")}
                  </span>
                  .
                </p>
                <p className="pt-1 text-lg font-semibold">
                  Runtime:{" "}
                  <span className="text-lg font-normal">{data.runtime} s</span>
                </p>
                <p className="pt-1 pb-10 text-lg font-semibold">
                  Overview: <br />{" "}
                  <span className="text-lg font-normal">{data.overview}</span>
                </p>
                <button
                  className="btn btn-primary border-none w-80 bg-primary
              hover:bg-orange-500"
                >
                  Wacth Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default DetailMovie;
