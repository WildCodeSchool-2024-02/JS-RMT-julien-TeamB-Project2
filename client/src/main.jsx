import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

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
    loader: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/genres`)
        .then((res) => res.data),
  },
  {
    path: "/articles/:id",
    element: <Article />,
    loader: async ({ params }) => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/games/${params.id}`
      );
      return res.data;
    },
  },
  {
    path: "/panier",
    element: <Cart />,
    loader: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/basket`)
        .then((res) => res.data),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
