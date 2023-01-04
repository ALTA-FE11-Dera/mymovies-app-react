import React, { Component } from "react";

interface CardProps {
  title: string;
  image: string;
  review: string;
  btn_fav: string;
  btn_review: string;
}

export class Card extends Component<CardProps> {
  render() {
    return (
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500${this.props.image}`}
            alt={this.props.title}
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{this.props.title}</h2>
          <p>{this.props.review}</p>
          <div className="card-actions">
            <button className="btn btn-primary border-none bg-blue-600 hover:bg-blue-400">
              {this.props.btn_fav}
            </button>
            <button className="btn btn-primary border-none bg-green-600 hover:bg-green-400">
              {this.props.btn_review}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
