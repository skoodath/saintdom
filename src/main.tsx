import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
