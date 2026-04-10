import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/lib/hooks";
import {
  catThunk,
  catNextPageThunk,
} from "../../entities/cat/model/cat.thunks";
import { favoriteCat } from "../../entities/cat/model/cat.slice";
import OneCat from "../../component/OneCat/OneCat";
import "./HomePage.css";

export default function HomePage(): React.JSX.Element {
  const cats = useAppSelector((str) => str.cat.cat);
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(0);
  const loadingRef = useRef(false);

  useEffect(() => {
    dispatch(catThunk());
    dispatch(favoriteCat());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 200 &&
        !loadingRef.current
      ) {
        loadingRef.current = true;
        const nextPage = page + 1;
        setPage(nextPage);
        dispatch(catNextPageThunk(nextPage)).then(() => {
          loadingRef.current = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dispatch, page]);

  return (
    <main className="container">
      {cats?.map((cat) => (
        <div key={cat.id} className="oneItem">
          <OneCat cat={cat} />
        </div>
      ))}
    </main>
  );
}
