interface getPoketDetailProps {
    url : string;
}


function getPoketDetailApi({ url }: getPoketDetailProps): JSX.Element {
    
  }

export default getPoketDetailApi;

export const getPoketmonDetail = (showPoke: number, pokeNum: number) => 
  fetch(`https://pokeapi.co/api/v2/pokemon?limit=${showPoke}&offset=${pokeNum}`).then(
    (res) => res.json(),
  );
