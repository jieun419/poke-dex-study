import { useQuery } from "react-query";
import Card from "./Card";

function CallDatas(): JSX.Element {
  //향후 
    const {isLoading, isError, data} = useQuery({
      queryKey: ['pokemonsDataList'],
      queryFn: () => 
      fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0').then(
        (res) => res.json(),
      ),
    })
    if(isLoading) return <span>Loading...</span>
    if (isError) return <span>Error!</span>
    return (
      <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent:"space-between"}}>
        {data.results.map((poke: { name: string, url: string }, index: number) => (
          <Card poketId={index} key={index} name={poke.name} url={poke.url} />
        ))}
      </div>     
      </>      
    )  
  }

  export default CallDatas;