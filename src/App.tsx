import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CharactersList from "./pages/characters/CharactersList";
import EpisodesList from "./pages/episodes/EpisodesList";
import LocationsList from "./pages/locations/LocationsList";
import MainLayout from "./Layouts/MainLayout";
import CharacterPage from "./pages/characters/CharacterPage";
import EpisodePage from "./pages/episodes/EpisodePage";
import LocationPage from "./pages/locations/LocationPage";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="characters">
            <Route index element={<CharactersList />} />
            <Route path=":characterId" element={<CharacterPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/*<Route path="characters" element={<CharactersList />} />*/}
          {/*<Route path="characters/:characterId" element={<CharacterPage />} />*/}
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
          <Route path="*" element={<NotFound />} />
        </Route>
        {/*<Route path="/" element={<Home />} />*/}
        {/*<Route path="/characters" element={<CharactersList />} />*/}
        {/*<Route path="/characters/element" element={<CharacterPage />} />*/}
        {/*<Route path="/episodes" element={<EpisodesList />} />*/}
        {/*<Route path="/location" element={<LocationsList />} />*/}
      </Routes>
    </>
  );
}
