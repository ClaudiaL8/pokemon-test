import React from "react";
import { Container, CircularProgress, Typography } from "@mui/material";
import { usePokemonsContext } from "../../contexts/pokemonsContexts";
import PokemonsList from "../../components/pokemonsList";

export default function Pokedex() {
  const { pokemonsList } = usePokemonsContext();
  const { isLoading, data, error } = pokemonsList;

  return (
    <Container>
      {isLoading && <CircularProgress />}
      {!!data?.length && <PokemonsList />}
      {error && <Typography>Upss algo fue mal</Typography>}
    </Container>
  );
}
