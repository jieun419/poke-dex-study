import axios from 'axios';

const LIMIT = 20;

export const getPokeDataList = async () => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`);
  return res.data;
};
