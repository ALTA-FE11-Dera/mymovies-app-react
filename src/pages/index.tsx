import React, { Component } from "react";
import Input, { TextArea } from "../components/Input";
import Layout from "../components/Layout";

export default class index extends Component {
  state = {
    datas: [
      {
        id: 1,
        title: "Avatar",
        img: "https://image.tmdb.org/t/p/w185/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      },
      {
        id: 2,
        title: "Avatar",
        img: "https://image.tmdb.org/t/p/w185/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      },
      {
        id: 3,
        title: "Avatar",
        img: "https://image.tmdb.org/t/p/w185/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      },
      {
        id: 4,
        title: "Avatar",
        img: "https://image.tmdb.org/t/p/w185/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      },
    ],
  };
  render() {
    return (
      <Layout>
        <div className="grid grid-cols-4 gap-3">
          {this.state.datas.map((data) => (
            <div key={data.id}>
              <img src={data.img} />
              <p className="text-center">{data.title}</p>
            </div>
          ))}
        </div>
      </Layout>
    );
  }
}
