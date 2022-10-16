import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { columns } from "./pokemonMovesListColumns";
import { usePokemonsContext } from "../../../contexts/pokemonsContexts";

const PokemonMoves = (props) => {
  const { setMoves } = usePokemonsContext();
  const { data } = props;
  const [selectionModel, setSelectionModel] = useState([]);

  const handleDelete = () => {
    setMoves(data.filter((x) => !selectionModel.includes(x.id)));
  };

  return (
    <Box sx={{ height: 400, width: "100%", marginBottom: 5 }}>
      <Box sx={{ display: "flex", height: "100%" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            sx={{ alignContent: "end" }}
            variant="outlined"
            startIcon={<DeleteIcon />}
            disabled={!selectionModel.length}
            onClick={handleDelete}
          >
            Delete
          </Button>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableColumnMenu
            onSelectionModelChange={(ids) => {
              setSelectionModel(ids);
            }}
            selectionModel={selectionModel}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default PokemonMoves;
