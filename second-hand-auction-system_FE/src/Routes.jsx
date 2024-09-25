import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HomePage from "pages/HomePage";
import Product from "pages/Product";
import Auction from "pages/Auction";
import Login from "pages/Login";
import Register from "pages/Register";

const ProjectRoutes = () => {
  let element =
    useRoutes();
    //   [
    //   { path: "dhiwise-dashboard", element: <Home /> },
    //   { path: "*", element: <NotFound /> },
    //   {
    //     path: "/",
    //     element: <HomePage />,
    //   },
    //   {
    //     path: "product",
    //     element: <Product />,
    //   },
    //   {
    //     path: "auction",
    //     element: <Auction />,
    //   },
    //   {
    //     path: "login",
    //     element: <Login />,
    //   },
    //   {
    //     path: "register",
    //     element: <Register />,
    //   },
    // ]

  return element;
};

export default ProjectRoutes;
