import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
// import Image from "material-ui-image";

function Filter() {
  const [pokemonCardData, setPokemonCardData] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const urlPokemonData = `https://pokeapi.co/api/v2/pokemon/${id}`;

  useEffect(() => {
    async function getPokemonsData() {
      setLoading(true);
      try {
        const { data } = await axios.get(urlPokemonData);
        setPokemonCardData({
          name: data.name,
          sprites: data.sprites.back_default,
          abilities: data.abilities.filter((ability) => !ability.is_hidden),
          moves: data.moves,
          moreProperties: await getMoreProperties(data.forms[0].url),
        });
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    }
    getPokemonsData();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getMoreProperties(url) {
    try {
      const { data } = await axios.get(url);
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Stack>
      {loading ? (
        <CircularProgress />
      ) : (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image={pokemonCardData.sprites}
            alt={pokemonCardData.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {pokemonCardData.name}
            </Typography>
            {pokemonCardData.moreProperties.types.map((type) => {
              return <Stack>{type.type.name}</Stack>;
            })}
            {/* <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography> */}
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      )}
    </Stack>
  );
}

export default Filter;
