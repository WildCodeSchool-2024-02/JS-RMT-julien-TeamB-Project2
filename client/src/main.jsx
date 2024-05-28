import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { CartProvider } from "./context/CartContext";

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
        .get(`${import.meta.env.VITE_API_URL}/api/games`)
        .then((res) => res.data),
  },
  {
    path: "/article/:id",
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
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
