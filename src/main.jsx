import * as React from "react";
import "./App.css";
import Navbar from "./Navbar";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import LocationDetailPage from "./pages/LocationDetailPage";
import LocationPage from "./pages/LocationPage";
import EpisodePage from "./pages/EpisodePage";
import EpisodeDetailPage from "./pages/EpisodeDetailPage";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  );
};

export default Root;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "characters",
        element: <CharactersPage />,
      },
      {
        path: "characters/:id",
        element: <CharacterDetailPage />,
      },
      {
        path: "episodes",
        element: <EpisodePage />,
      },
      {
        path: "episodes/:id",
        element: <EpisodeDetailPage />,
      },
      {
        path: "locations",
        element: <LocationPage />,
      },
      {
        path: "locations/:id",
        element: <LocationDetailPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
