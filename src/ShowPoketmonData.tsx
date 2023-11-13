import { useQuery } from "react-query";
import CardList from "./CardList";
import { useState } from "react";
import { getPoketmonDataApi } from "./getPoketDataApi";
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';
import styled from "styled-components";

function ShowPoketmonData(): JSX.Element {
    const [pokeNum, setPokeNum] = useState(0);
    const showPoke = 10;
    const [apiUrl, setApiUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${showPoke}&offset=0`);
    console.log(`이거: ${apiUrl}`)

    const nextPageUrl = () =>{
      const nextPokeList = pokeNum + showPoke;
      setPokeNum(nextPokeList);
      setApiUrl(`https://pokeapi.co/api/v2/pokemon?limit=${showPoke}&offset=${nextPokeList}`)
    }
    const beforePageUrl = () =>{
      const beforePokeList = pokeNum - showPoke;
      setPokeNum(beforePokeList);
      setApiUrl(`https://pokeapi.co/api/v2/pokemon?limit=${showPoke}&offset=${beforePokeList}`)
    }

    const {isLoading, isError, data, refetch} = useQuery({
      queryKey: ['pokemonsDataList'],
      queryFn: ()=> getPoketmonDataApi(apiUrl)
    })

    if(isLoading) return <span>Loading...</span>
    if(isError) return <span>Error! 데이터를 받아오는데 문제가 발생했습니다.</span>
    console.log(data)

    return (
      <>
        <PageBtn onClick={() => { beforePageUrl(); refetch()}}><BiLeftArrow/></PageBtn>
        <CardList data={data} ></CardList>
        <PageBtn onClick={() => { nextPageUrl(); refetch()}}><BiRightArrow/></PageBtn>
      </>      
    )  
  }

  export default ShowPoketmonData;


  const PageBtn = styled.button`
  height: 300px;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  align-items: center;
  margin-top: 200px;
`;