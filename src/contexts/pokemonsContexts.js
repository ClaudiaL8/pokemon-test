import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getPokemonsData } from "../api/index";

const initialState = {
  pokemonsList: { isLoading: true, data: [], error: "" },
  // addPokemonsData: () => null,
};
const PokemonsContext = createContext(initialState);

export const usePokemonsContext = () => useContext(PokemonsContext);

export const PokemonsContextProvider = ({ children }) => {
  const [pokemonsList, setPokemonList] = useState(initialState.pokemonsList);

  const fetchPokemonList = async () => {
    try {
      const data = await getPokemonsData();
      const mappedPokemonsData = data
        .map((pokemon, i) => ({
          ...pokemon,
          id: i,
        }))
        .sort((a, b) => (a.name > b.name ? 1 : -1));
      setPokemonList({ isLoading: false, data: mappedPokemonsData });
    } catch (err) {
      setPokemonList({ isLoading: false, error: err });
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  const state = useMemo(
    () => ({
      pokemonsList,
      // addPokemonsData,
    }),
    [pokemonsList]
  );
  return (
    <PokemonsContext.Provider value={state}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsContext;
