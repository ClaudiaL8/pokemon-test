import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import MoreProperties from "./MoreProperties";
import PokemonMoves from "./pokemonMovesList";
import PokemonAbilities from "./PokemonAbilities";

const PokemonCard = ({ sprites, name, moves, moreProperties, abilities }) => {
  return (
    <Card sx={{ display: "flex" }}>
      <Box
        sx={{
          width: 300,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {sprites ? (
          <CardMedia component="img" image={sprites} alt={name} />
        ) : (
          <Typography
            variant="body2"
            color="text.secondary"
            textAlign={"center"}
          >
            Ohh sorry, I'm so shy for pictures
          </Typography>
        )}
      </Box>
      <CardContent sx={{ width: 430 }}>
        <PokemonAbilities data={abilities}></PokemonAbilities>
        <PokemonMoves data={moves}></PokemonMoves>
        <MoreProperties data={moreProperties}></MoreProperties>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
