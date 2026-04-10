import React, { useState } from "react";
import nullfavoriteIcon from "../../shared/assets/favorite_border.svg";
import favoriteIcon from "../../shared/assets/favorite.svg";
import "./FavoritButton.css";
import type { Cat } from "../../entities/cat/model/cat.types";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks";
import {
  addFavoriteCat,
  removeFavoriteCat,
} from "../../entities/cat/model/cat.slice";

type Props = {
  cat: Cat;
};

export default function FavoritButton({ cat }: Props): React.JSX.Element {
  const [animate, setAnimate] = useState(false);
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((str) =>
    str.cat.favoritesCat?.find((item) => item.id === cat.id),
  );
  const result = isFavorite ? favoriteIcon : nullfavoriteIcon;

  const handleClick = () => {
    setAnimate(true);
    if (isFavorite) {
      dispatch(removeFavoriteCat(cat));
    } else {
      dispatch(addFavoriteCat(cat));
    }
    setTimeout(() => setAnimate(false), 400);
  };

  return (
    <button className="ButtonCat" onClick={handleClick}>
      <img 
        className={`ImgButton ${animate ? "animate" : ""}`} 
        src={result} 
        alt="favorite" 
      />
    </button>
  );
}