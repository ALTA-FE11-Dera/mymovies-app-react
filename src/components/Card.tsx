import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

interface CardProps {
  title?: string;
  image?: string;
  id?: number;
  onClickFav?: () => void;
  labelButton?: string;
  navigate?: any;
  params?: any;
}

const Card: FC<CardProps> = ({ id, image, title, labelButton, onClickFav }) => {
  const navigate = useNavigate();
  function onClickDetail() {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="card bg-white dark:bg-slate-900  dark:text-white shadow-xl">
      <figure onClick={() => onClickDetail()}>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
      </figure>
      <div className="card-body items-center justify-between">
        <h2 className="card-title text-center" onClick={() => onClickDetail()}>
          {title}
        </h2>
        <div className="card-actions w-full justify-center">
          <Button
            className="btn btn-primary border-none  bg-orange-500
              hover:bg-orange-400"
            onClick={onClickFav}
            label={labelButton}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
