import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import {
  getPokemonsData,
  getPokemonsDetails,
  getMoreProperties,
} from "../api/index";

const initialState = {
  pokemonsList: { isLoading: false, data: [], error: "" },
  selectedPokemon: {
    name: "",
    url: "",
    details: {},
    isLoading: false,
    error: "",
  },
};
const PokemonsContext = createContext(initialState);

export const usePokemonsContext = () => useContext(PokemonsContext);

export const PokemonsContextProvider = ({ children }) => {
  const [pokemonsList, setPokemonList] = useState(initialState.pokemonsList);
  const [selectedPokemonDetails, setSelectedPokemonDetails] = useState(
    initialState.selectedPokemon
  );

  const fetchPokemonList = async () => {
    setPokemonList({ ...initialState.pokemonsList, isLoading: true });
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchPokemonDetails = useCallback(async ({ name, url }) => {
    setSelectedPokemonDetails({
      ...initialState.selectedPokemon,
      isLoading: true,
    });

    const findedUrl = () => {
      const poke = pokemonsList?.data?.find((pke) => pke.name === name);
      return poke.url;
    };

    try {
      const data = await getPokemonsDetails(url || findedUrl());
      const { sprites, abilities, moves, forms } = data;
      const moreProperties = await getMoreProperties(forms[0].url);
      setSelectedPokemonDetails({
        name,
        url: url || findedUrl(),
        details: {
          sprites: sprites.back_default,
          abilities: abilities
            .filter((ab) => !ab.is_hidden)
            .map((ab) => ab.ability.name),
          moves: moves
            .map((mv, i) => ({
              name: mv.move.name,
              url: mv.move.url,
              id: i,
            }))
            .sort((a, b) => a.url - b.url),
          moreProperties,
        },
        isLoading: false,
        error: "",
      });
    } catch (error) {
      setSelectedPokemonDetails({
        name,
        url: url || findedUrl(),
        isLoading: false,
        error: error,
      });
      console.error(error);
    }
  });

  useEffect(() => {
    fetchPokemonList();
  }, []);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const setMoves = useCallback((newMoves) => {
    setSelectedPokemonDetails({
      ...selectedPokemonDetails,
      details: {
        ...selectedPokemonDetails.details,
        moves: newMoves,
      },
    });
  });

  const state = useMemo(
    () => ({
      pokemonsList,
      fetchPokemonDetails,
      selectedPokemonDetails,
      setMoves,
    }),
    [pokemonsList, fetchPokemonDetails, selectedPokemonDetails, setMoves]
  );
  return (
    <PokemonsContext.Provider value={state}>
      {children}
    </PokemonsContext.Provider>
  );
};

export default PokemonsContext;
