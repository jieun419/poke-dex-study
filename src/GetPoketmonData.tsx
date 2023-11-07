import { useQuery } from "react-query";
import Card from "./Card";

function GetPoketmonData(): JSX.Element {
  //향후 fetch부분과 Card 컴포넌트 분리 필요해보임?
    const getPoketmonApi = () => 
    fetch('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0').then(
      (res) => res.json(),
    )
    const {isLoading, isError, data} = useQuery({
      queryKey: ['pokemonsDataList'],
      queryFn: getPoketmonApi,
    })
    if(isLoading) return <span>Loading...</span>
    if (isError) return <span>Error! 데이터를 받아오는데 문제가 발생했습니다.</span>
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

  export default GetPoketmonData;