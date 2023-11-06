import { useQuery } from "react-query";
import Card from "./Card";

function Call(): JSX.Element {
    const {isLoading, isError, data} = useQuery({
      queryKey: ['pokemonsDataList'],
      queryFn: () => 
      fetch('https://pokeapi.co/api/v2/pokemon?limit=19&offset=0').then(
        (res) => res.json(),
      ),
    })
    if(isLoading) return <span>잠깐! 로딩 중입니다...</span>
    if (isError) return <span>에러가 발생했습니다!!</span>
    return (
      <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.results.map((poke: { name: string, url: string }, index: number) => (
          <Card poketId={index} key={index} name={poke.name} url={poke.url} />
        ))}
      </div>     
      </>      
    )  
  }

  export default Call;