import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { usePokemonsContext } from "../../contexts/pokemonsContexts";
import { columns } from "./pokemonsListColumns";

export default function Pokedex() {
  const { pokemonsList } = usePokemonsContext();
  const { data } = pokemonsList;

  function QuickSearchToolbar() {
    return (
      <Box
        sx={{
          p: 0.5,
          pb: 0,
        }}
      >
        <GridToolbarQuickFilter
          quickFilterParser={(searchInput) =>
            searchInput
              .split(",")
              .map((value) => value.trim())
              .filter((value) => value !== "")
          }
        />
      </Box>
    );
  }

  return (
    <Box sx={{ height: 920, width: "100%" }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
            disableColumnMenu
            components={{ Toolbar: QuickSearchToolbar }}
          />
        </Box>
      </Box>
    </Box>
  );
}
