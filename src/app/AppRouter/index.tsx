import { Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import PrivateRoute from "../../features/PrivateRoute";
import { CharacterPage } from "../../pages/characters/CharacterPage/CharacterPage.lazy.tsx";
import { CharactersList } from "../../pages/characters/CharactersList/CharactersList.lazy.tsx";
import { Home } from "../../pages/Home/Home.lazy.tsx";
import { NotFound } from "../../pages/NotFound/NotFound.lazy.tsx";
import { EpisodesList } from "../../pages/episodes/EpisodesList/EpisodesList.lazy.tsx";
import { EpisodePage } from "../../pages/episodes/EpisodePage/EpisodePage.lazy.tsx";
import { LocationsList } from "../../pages/locations/LocationsList/LocationsList.lazy.tsx";
import { LocationPage } from "../../pages/locations/LocationPage/LocationPage.lazy.tsx";
import { Login } from "../../pages/Login/Login.lazy.tsx";

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
