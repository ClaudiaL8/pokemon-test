import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Pokedex from "./components/Pokedex";
import PageNotFound from "./components/PageNotFound";
import PokemonCard from "./components/PokemonCard";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <Stack>
      <Typography variant="h1">Pokemons</Typography>
      <Router>
        <Routes>
          <Route exact path="/" element={<Pokedex />} />
          <Route path="/Pokemon/:id" element={<PokemonCard />} />
          <Route exact path="/not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Router>
    </Stack>
  );
}

export default App;
