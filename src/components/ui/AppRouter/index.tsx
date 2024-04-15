import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import PrivateRoute from "../PrivateRoute";
import { CharacterPage } from "../../../pages/characters/CharacterPage/CharacterPage.lazy";
import { CharactersList } from "../../../pages/characters/CharactersList/CharactersList.lazy";
import { Home } from "../../../pages/Home/Home.lazy";
import { NotFound } from "../../../pages/NotFound/NotFound.lazy";
import { EpisodesList } from "../../../pages/episodes/EpisodesList/EpisodesList.lazy";
import { EpisodePage } from "../../../pages/episodes/EpisodePage/EpisodePage.lazy";
import { LocationsList } from "../../../pages/locations/LocationsList/LocationsList.lazy";
import { LocationPage } from "../../../pages/locations/LocationPage/LocationPage.lazy";
import { Login } from "../../../pages/Login/Login.lazy";

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
