import React from "react";
import type { Cat } from "../../entities/cat/model/cat.types";
import FavoritButton from "../FavoritButton/FavoritButton";
import "./OneCat.css";

type Props = {
  cat: Cat;
};

export default function OneCat({ cat }: Props): React.JSX.Element {
  return (
    <>
      <img className="oneCat" src={cat.url} alt="" />
      <FavoritButton cat={cat} />
    </>
  );
}
