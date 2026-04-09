import React from "react";
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
  let result = nullfavoriteIcon;
  const dispatch = useAppDispatch();
  const isFavorite = useAppSelector((str) =>
    str.cat.favoritesCat?.find((item) => item.id === cat.id),
  );
  if (isFavorite) {
    result = favoriteIcon;
  }

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavoriteCat(cat));
    } else dispatch(addFavoriteCat(cat));
  };

  return (
    <button className="ButtonCat" onClick={handleClick}>
      <img className="imgButton" src={result} alt={result} />
    </button>
  );
}
