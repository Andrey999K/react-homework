import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CharactersList from "./pages/characters/CharactersList";
import EpisodesList from "./pages/episodes/EpisodesList";
import LocationsList from "./pages/locations/LocationsList";
import MainLayout from "./layouts/MainLayout";
import CharacterPage from "./pages/characters/CharacterPage";
import EpisodePage from "./pages/episodes/EpisodePage";
import LocationPage from "./pages/locations/LocationPage";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthProvider";

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
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
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
