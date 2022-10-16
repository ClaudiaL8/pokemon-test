import axios from "axios";

const getPokemonsListUrl = async () => {
  try {
    const {
      data: { count },
    } = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
    const pokemonsCount = count;
    return `https://pokeapi.co/api/v2/pokemon/?limit=${pokemonsCount}`;
  } catch (err) {
    console.log("error getring number of pokemons");
  }
};

export const getPokemonsData = async () => {
  try {
    const url = await getPokemonsListUrl();
    const { data } = await axios.get(url);
    return data.results;
  } catch {
    console.log("error getting pokemons");
  }
};

export const getPokemonsDetails = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch {
    console.log("error getting pokemons details");
  }
};

export const getMoreProperties = async (url) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
};
