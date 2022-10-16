import React from "react";
import { Container, CircularProgress, Typography } from "@mui/material";
import { usePokemonsContext } from "../contexts/pokemonsContexts";
import PokemonsList from "../components/pokemonsList";

const PokedexPage = () => {
  const { pokemonsList } = usePokemonsContext();
  const { isLoading, data, error } = pokemonsList;

  return (
    <Container>
      <Typography variant="h1" marginBottom={4}>
        Pokedex
      </Typography>
      {isLoading && <CircularProgress />}
      {!!data?.length && <PokemonsList />}
      {error && <Typography>Upss algo fue mal</Typography>}
    </Container>
  );
};

export default PokedexPage;
