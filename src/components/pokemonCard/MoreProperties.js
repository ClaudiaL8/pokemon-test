import React from "react";
import { Box, Typography } from "@mui/material";

const MoreProperties = ({ data }) => {
  return (
    <Box>
      <Typography variant="body1" color="text.secondary">
        ID: {data.id}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Is battle only: {data.is_battle_only ? "No" : "Yes"}
      </Typography>
    </Box>
  );
};

export default MoreProperties;
