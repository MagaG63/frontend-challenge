import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./Layout";
import HomePage from "../../pages/HomePage/HomePage";
import FavoritePage from "../../pages/FavoritePage/FavoritePage";

export default function Router(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="favorite" element={<FavoritePage />} />
      </Route>
    </Routes>
  );
}
