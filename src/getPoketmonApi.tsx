export const getPoketmonApi = (showPoke: number, pokeNum: number) => 
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${showPoke}&offset=${pokeNum}`).then(
    (res) => res.json(),
  );
