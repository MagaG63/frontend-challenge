import React, { useState } from "react";
import type { Cat } from "../../entities/cat/model/cat.types";
import FavoritButton from "../FavoritButton/FavoritButton";
import "./OneCat.css";

type Props = {
  cat: Cat;
};

export default function OneCat({ cat }: Props): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <div className="cat-skeleton" />}
      <img
        className="oneCat"
        src={cat.url}
        alt="cat"
        style={{ display: isLoading ? "none" : "block" }}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
      />
      <FavoritButton cat={cat} />
    </>
  );
}
