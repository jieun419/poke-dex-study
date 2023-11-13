import { useQuery } from "react-query";
import CardList from "./CardList";
import { useState } from "react";
import { getPoketmonApi } from "./getPoketmonApi";

function GetPoketmonData(): JSX.Element {
    const [pokeNum, setPokeNum] = useState(0);
    const [showPoke, setShowPoke] = useState(12);

    const nextPoke = () =>{
      console.log('다음포켓몬')
      const nextPokeList = pokeNum + showPoke;
      setPokeNum(nextPokeList);
    }

    const {isLoading, isError, data} = useQuery({
      queryKey: ['pokemonsDataList'],
      queryFn: ()=> getPoketmonApi(showPoke, pokeNum)
    })
    if(isLoading) return <span>Loading...</span>
    if(isError) return <span>Error! 데이터를 받아오는데 문제가 발생했습니다.</span>
    return (
      <>
      <CardList data={data}></CardList>
        <button style={{fontSize:"30px", cursor:"pointer", backgroundColor:"red"}} onClick={nextPoke}> 임시 다음으로</button>      
      </>      
    )  
  }

  export default GetPoketmonData;