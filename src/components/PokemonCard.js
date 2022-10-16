import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import { usePokemonsContext } from "../contexts/pokemonsContexts";

export default function Filter() {
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
  }, [data]);

  return (
    <Box>
      {isLoading && <CircularProgress />}
      {!!Object.entries(details).length && (
        <Card sx={{ maxWidth: 345 }}>
          {details.sprites ? (
            <CardMedia component="img" image={details.sprites} alt={name} />
          ) : (
            <Typography
              variant="body2"
              color="text.secondary"
              textAlign={"center"}
            >
              Ohh sorry, I'm so shy for pictures
            </Typography>
          )}

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            {details.moreProperties.types.map((type) => {
              return <Stack key={type.type.name}>{type.type.name}</Stack>;
            })}
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )}
      {error && <Typography>Upss algo fue mal</Typography>}
    </Box>
  );
}
