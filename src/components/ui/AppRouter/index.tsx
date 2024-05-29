import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import PrivateRoute from "../PrivateRoute";

const Home = lazy(() =>
  import("../../../pages/Home").then(module => ({ default: module.Home }))
);
const CharactersList = lazy(() =>
  import("../../../pages/characters/CharactersList").then(module => ({
    default: module.CharactersList
  }))
);
const CharacterPage = lazy(() =>
  import("../../../pages/characters/CharacterPage").then(module => ({
    default: module.CharacterPage
  }))
);
const EpisodesList = lazy(() =>
  import("../../../pages/episodes/EpisodesList").then(module => ({
    default: module.EpisodesList
  }))
);
const EpisodePage = lazy(() =>
  import("../../../pages/episodes/EpisodePage").then(module => ({
    default: module.EpisodePage
  }))
);
const LocationsList = lazy(() =>
  import("../../../pages/locations/LocationsList").then(module => ({
    default: module.LocationsList
  }))
);
const LocationPage = lazy(() =>
  import("../../../pages/locations/LocationPage").then(module => ({
    default: module.LocationPage
  }))
);
const Login = lazy(() =>
  import("../../../pages/Login").then(module => ({ default: module.Login }))
);
const NotFound = lazy(() =>
  import("../../../pages/NotFound").then(module => ({
    default: module.NotFound
  }))
);

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="characters">
            <Route index element={<CharactersList />} />
            <Route path=":characterId" element={<CharacterPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="episodes">
            <Route index element={<EpisodesList />} />
            <Route path=":episodeId" element={<EpisodePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="locations">
            <Route index element={<LocationsList />} />
            <Route path=":locationId" element={<LocationPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
