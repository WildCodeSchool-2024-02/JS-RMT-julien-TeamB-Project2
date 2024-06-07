import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
// eslint-disable-next-line import/no-unresolved
import { Toaster } from "sonner";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import App from "./App";
import Catalog from "./pages/Catalog";
import Article from "./pages/Article";
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () =>
      axios
        .get(`${import.meta.env.VITE_API_URL}/api/games?type=carousel`)
        .then((res) => res.data),
  },
  {
    path: "/catalog",
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
    path: "/cart",
    element: <Cart />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
    <Toaster richColors expand />
  </React.StrictMode>
);
