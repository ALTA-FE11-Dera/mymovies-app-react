import React, { Component } from "react";

import Button from "./Button";

import { withRouter } from "../utils/navigation";

interface CardProps {
  title: string;
  image: string;
  id: number;
  onClickFav?: () => void;
  labelButton: string;
  navigate?: any;
  params?: any;
}

class Card extends Component<CardProps> {
  onClickDetail() {
    this.props.navigate(`/movie/${this.props.id}`);
  }

  render() {
    return (
      <div className="card bg-slate-800 shadow-xl">
        <figure onClick={() => this.onClickDetail()}>
          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
        </figure>
        <div className="card-body items-center justify-between">
          <h2
            className="card-title text-center"
            onClick={() => this.onClickDetail()}
          >
            {this.props.title}
          </h2>
          <div className="card-actions w-full justify-center">
            <Button
              className="btn btn-primary border-none bg-primary
              hover:bg-orange-500"
              onClick={this.props.onClickFav}
              label={this.props.labelButton}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
