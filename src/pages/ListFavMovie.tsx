import React, { Component } from "react";
import axios from "axios";

import Layout from "../components/Layout";
import Card from "../components/Card";
import { LoadingAnimation } from "../components/Loader";
import { MovieType } from "../utils/types/movie";

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: MovieType[];
}

export default class ListFavMovie extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      datas: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const getFavorite = localStorage.getItem("FavMovie");
    if (getFavorite) {
      this.setState({ datas: JSON.parse(getFavorite) });
    }
    this.setState({ loading: false });
  }

  removeFavorite(data: MovieType) {
    let dupeDatas: MovieType[] = this.state.datas.slice();
    const filterData = dupeDatas.filter((item) => item.id !== data.id);
    localStorage.setItem("FavMovie", JSON.stringify(filterData));
    alert(`Delete ${data.title} from favorite list`);
  }

  render() {
    return (
      <Layout>
        <div className="mx-12 pt-10 pb-5">
          <h2 className="font-extrabold text-2xl text-center">
            FAVORITE MOVIE
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {this.state.loading
            ? [...Array(20).keys()].map((data) => (
                <LoadingAnimation key={data} />
              ))
            : this.state.datas.map((data: MovieType) => (
                <Card
                  key={data.id}
                  title={data.title}
                  image={data.poster_path}
                  id={data.id}
                  labelButton="REMOVE FROM FAVORITE"
                  onClickFav={() => this.removeFavorite(data)}
                />
              ))}
        </div>
      </Layout>
    );
  }
}
