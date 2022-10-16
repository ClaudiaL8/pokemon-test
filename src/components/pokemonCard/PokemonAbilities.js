import React from "react";
import { Box, Typography } from "@mui/material";

const PokemonAbilities = ({ data }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Typography variant="body1" color="text.secondary">
        Abilities: {data.join()}
      </Typography>
    </Box>
  );
};

export default PokemonAbilities;
