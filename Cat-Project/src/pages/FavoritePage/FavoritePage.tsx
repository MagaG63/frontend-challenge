import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks";
import OneCat from "../../component/OneCat/OneCat";
import './FavoritePage.css'
import { favoriteCat } from "../../entities/cat/model/cat.slice";

export default function FavoritePage(): React.JSX.Element {
  const cats = useAppSelector((str) => str.cat.favoritesCat);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(favoriteCat())
  }, [dispatch]);

  console.log(cats);
  return (
    <main className="container">
      {cats?.map((cat) => (
        <div className="oneItem">
          <OneCat cat={cat} />
        </div>
      ))}
    </main>
  );
}
