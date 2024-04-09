import React from 'react';
import { Route, Routes } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout";
import Home from "../../../pages/Home";
import CharactersList from "../../../pages/characters/CharactersList";
import CharacterPage from "../../../pages/characters/CharacterPage";
import NotFound from "../../../pages/NotFound";
import EpisodesList from "../../../pages/episodes/EpisodesList";
import EpisodePage from "../../../pages/episodes/EpisodePage";
import LocationsList from "../../../pages/locations/LocationsList";
import LocationPage from "../../../pages/locations/LocationPage";
import PrivateRoute from "../PrivateRoute";
import Login from "../../../pages/Login";

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