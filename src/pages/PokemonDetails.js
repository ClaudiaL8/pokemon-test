import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";
import { usePokemonsContext } from "../contexts/pokemonsContexts";
import PokemonCard from "../components/pokemonCard/PokemonCard";

const PokemonDetailsPage = () => {
  const location = useLocation();
  const { selectedPokemonDetails, fetchPokemonDetails, pokemonsList } =
    usePokemonsContext();
  const { name, details, isLoading, error } = selectedPokemonDetails;
  const { data } = pokemonsList;

  useEffect(() => {
    if (!isLoading && !Object.entries(details).length && data.length) {
      const name = location.pathname?.replaceAll("/", "");
      fetchPokemonDetails({ name });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" marginBottom={4}>
        {name}
      </Typography>
      {isLoading && <CircularProgress />}
      {!!Object.entries(details).length && (
        <PokemonCard
          sprites={details.sprites}
          name={name}
          moves={details.moves}
          moreProperties={details.moreProperties}
          abilities={details.abilities}
        />
      )}
      {error && <Typography>Upss algo fue mal</Typography>}
    </Box>
  );
};

export default PokemonDetailsPage;
