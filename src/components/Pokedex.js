import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import List from "./List";
import Filter from "./Filter";

function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokemonData2, setPokemonData2] = useState([]);
  const [page, setPage] = useState(0);

  const urlPokemonsData = "https://pokeapi.co/api/v2/pokemon/?limit=5000";

  useEffect(() => {
    async function getPokemonsData() {
      try {
        const { data } = await axios.get(urlPokemonsData);
        const mappedPokemonsData = data.results
          .map((pokemon, i) => ({
            ...pokemon,
            id: i,
          }))
          .sort((a, b) => (a.name > b.name ? 1 : -1));
        setPokemonData(mappedPokemonsData);
        setPokemonData2(mappedPokemonsData);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    getPokemonsData();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Stack>
      {loading ? (
        <CircularProgress />
      ) : (
        <Stack>
          <Filter
            pokemonData={pokemonData}
            setPokemonData2={setPokemonData2}
            page={page}
            setPage={setPage}
          />
          <List pokemonData={pokemonData2} page={page} setPage={setPage} />
        </Stack>
      )}
    </Stack>
  );
}

export default Pokedex;
