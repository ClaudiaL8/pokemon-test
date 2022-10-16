import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./pokemonMovesListColumns";

const PokemonMoves = ({ data }) => {
  // const handleOnCellClick = ({ row }) => {
  //   console.log({ row });
  //   window.open("/", "_blank");
  // };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableColumnMenu
            // onRowClick={handleOnCellClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonMoves;
