import React, { useState } from "react";
import TextField from "@mui/material/TextField";

function Filter(props) {
  const { pokemonData, setPokemonData2, page, setPage } = props;

  const [filter, setFilter] = useState("");

  function handleFilterChange(event) {
    const value = event.target.value;
    setFilter(value);
    //solo si la página no está en cero se pondrá a 0
    page !== 0 && setPage(0);
    setPokemonData2(
      pokemonData.filter((item) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  }

  return (
    <TextField
      id="standard-basic"
      label="Filter by Name"
      variant="standard"
      value={filter}
      onChange={handleFilterChange}
      sx={{ marginBottom: "20px" }}
    />
  );
}

export default Filter;
