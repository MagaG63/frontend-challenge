import React from "react";
import { Route, Routes } from "react-router";
import Layout from "./Layout";

export default function Router(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<>ss</>} />
        <Route path="favorite" element={<>ss</>} />
      </Route>
    </Routes>
  );
}
