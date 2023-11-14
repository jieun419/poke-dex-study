// https://pokeapi.co/api/v2/pokemon/1/

import axios from 'axios';

export const getPokeDetailData = async (name: string) => {
  const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.data;
};
