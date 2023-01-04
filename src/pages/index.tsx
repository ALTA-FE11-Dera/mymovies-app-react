import React, { Component } from "react";
import axios from "axios";

import Card from "../components/Card";
import Layout from "../components/Layout";
import { LoadingAnimation, SkeletonLoading } from "../components/Loader";

interface DatasType {
  id: number;
  title: string;
  poster_path: string;
  review: string;
}

interface PropsType {}

interface StateType {
  loading: boolean;
  datas: DatasType[];
}

export default class index extends Component<PropsType, StateType> {
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
    axios
      .get(
        `now_playing?api_key=${
          import.meta.env.VITE_API_KEY
        }&language=en-US&page=1`
      )
      .then((data) => {
        const { results } = data.data;
        //console.log(data);
        this.setState({ datas: results });
      })
      .catch((error) => {
        alert(error.toString());
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Layout>
        <div className="mx-12 pt-10 pb-5">
          <h2 className="font-bold text-2xl text-black text-center">
            NOW PLAYING
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {this.state.loading ? (
            <LoadingAnimation />
          ) : (
            this.state.datas.map((data: DatasType) => (
              <Card key={data.id} title={data.title} image={data.poster_path} />
            ))
          )}
        </div>
      </Layout>
    );
  }
}
