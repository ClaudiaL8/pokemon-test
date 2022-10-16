import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import { PokemonsContextProvider } from "./contexts/pokemonsContexts";
import Pokedex from "./pages/pokemonsList.js";
import PageNotFound from "./components/PageNotFound";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <Container>
      <Typography variant="h1">Pokemons</Typography>
      <PokemonsContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Pokedex />} />
            <Route path="/:name" element={<PokemonCard />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </PokemonsContextProvider>
    </Container>
  );
}

export default App;
