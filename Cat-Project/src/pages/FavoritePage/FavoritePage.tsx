import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks";
import OneCat from "../../component/OneCat/OneCat";
import { favoriteCat } from "../../entities/cat/model/cat.slice";

export default function FavoritePage(): React.JSX.Element {
  const cats = useAppSelector((str) => str.cat.favoritesCat);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(favoriteCat());
  }, [dispatch]);


  return (
    <main className="container">
      {cats?.map((cat) => (
        <div
          key={cat.id}
          className='oneItem'
        >
          <OneCat cat={cat} />
        </div>
      ))}
    </main>
  );
}
