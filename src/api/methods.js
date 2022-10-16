import axios from "axios";

const getPokemonsListUrl = async () => {
  const {
    data: { count },
  } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
  const pokemonsCount = count;
  return `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonsCount}`;
};

export const getPokemonsData = async () => {
  try {
    const url = await getPokemonsListUrl();
    const { data } = await axios.get(url);
    return data.results;
  } catch {
    console.log("error geting nuber of pokemons");
  }
};
