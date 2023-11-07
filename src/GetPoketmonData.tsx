import { useQuery } from "react-query";
import Card from "./Card";
import { useState } from "react";

function GetPoketmonData(): JSX.Element {
  //향후 fetch부분과 Card 컴포넌트 분리 필요해보임?
    const [pokeNum, setPokeNum] = useState(0);
    const [showPoke, setShowPoke] = useState(12);
    //page값은 수식으로 따로 계산을 해줘야 하나?

    const nextPoke = () =>{
      console.log('다음포켓몬')
      const nextPokeList = pokeNum + showPoke;
      setPokeNum(nextPokeList);
      //새로 데이터 바로 표시하게 이거 useEffect 써야되나?
      //불러온 데이터를 바로 useState에 담는 게 나을듯
    }

    const getPoketmonApi = () => 
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${showPoke}&offset=${pokeNum}`).then(
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
        <button style={{fontSize:"30px", cursor:"pointer", backgroundColor:"red"}} onClick={nextPoke}> 임시 다음으로</button>  
      </div> 
        
      </>      
    )  
  }

  export default GetPoketmonData;