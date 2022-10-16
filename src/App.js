import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { PokemonsContextProvider } from "./contexts/pokemonsContexts";
import PokedexPage from "./pages/Pokedex.js";
import PokemonDetailsPage from "./pages/PokemonDetails";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <Container>
      <PokemonsContextProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<PokedexPage />} />
            <Route path="/details/:name" element={<PokemonDetailsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </PokemonsContextProvider>
    </Container>
  );
};

export default App;
