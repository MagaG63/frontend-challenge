import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../component/NavBar/NavBar";

export default function Layout(): React.JSX.Element {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
