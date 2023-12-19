import * as React from "react";
import "./App.css";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
// import CharactersPage from '../src/pages/CharactersPage';
// import CharacterDetailPage from '../src/pages/CharacterDetailPage';
// import LocationsPage from './pages/LocationsPage';
// import LocationDetailPage from './pages/LocationDetailPage';
// import EpisodesPage from './pages/EpisodesPage';
// import EpisodeDetailPage from './pages/EpisodeDetailPage';
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
      <nav>
        <Link to="/characters">Characters</Link>
        <Link to="/locations">Locations</Link>
        <Link to="/episodes">Episodes</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Root;



const Testing = () => {
  return (
    <>
      <h1>Testing</h1>
    </>
  );
}


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

      // {
      //   path: "locations",
      //   element: <CharactersPage />,
      // },
      // {
      //   path: "locations/:id",
      //   element: <Testing />,
      // },

      // {
      //   path: "episodes",
      //   element: <CharactersPage />,
      // },
      // {
      //   path: "episodes/:id",
      //   element: <Testing />,
      // },
      
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);




// {
      //   path: 'locations',
      //   element: <LocationsPage />,
      //   children: [
      //     {
      //       path: ':id',
      //       element: <LocationDetailPage />
      //     }
      //   ]
      // },
      // {
      //   path: 'episodes',
      //   element: <EpisodesPage />,
      //   children: [
      //     {
      //       path: ':id',
      //       element: <EpisodeDetailPage />
      //     }
      //   ]
      // },
