import axios from 'axios';
import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Catalog from "./pages/Catalog";
import Article from "./pages/Article";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/",
    element: <Catalog />,
  },
  {
    path: "/Article",
    element: <Article />,
  },
  {
    path: "/panier",
    element: <Cart />,
    loader: () => axios
      .get("http://localhost:3310/api/games")
      .then((res) => res.data)
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
