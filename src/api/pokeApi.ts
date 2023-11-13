import axios from 'axios';

export const getPokeData = async () => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`);
  return res.data;
};
