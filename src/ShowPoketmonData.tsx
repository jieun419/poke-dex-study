import { useQuery } from "react-query";
import CardList from "./CardList";
import { useState } from "react";
import { getPoketmonDataApi } from "./getPoketDataApi";
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';
import styled from "styled-components";
import getPoketDetailApi from "./getPoketDetailApi";

function ShowPoketmonData(): JSX.Element {
    const [pokeNum, setPokeNum] = useState(0);
    const [showCard, setShowCard] = useState(12);
    const [apiUrl, setApiUrl] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${showCard}&offset=0`);
    console.log(`포켓몬리스트: ${apiUrl}`)

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedValue = parseInt(event.target.value, 10);
      setShowCard(selectedValue)
      setPokeNum(0);
      setApiUrl(`https://pokeapi.co/api/v2/pokemon?limit=${selectedValue}&offset=0`)
    }

    const nextPageUrl = () =>{
      const nextPokeList = pokeNum + showCard;
      setPokeNum(nextPokeList);
      setApiUrl(`https://pokeapi.co/api/v2/pokemon?limit=${showCard}&offset=${nextPokeList}`)
    }

    const beforePageUrl = () =>{
      const beforePokeList = pokeNum - showCard;
      setPokeNum(beforePokeList>=0?beforePokeList:0);
      setApiUrl(`https://pokeapi.co/api/v2/pokemon?limit=${showCard}&offset=${beforePokeList}`)
    }

    const {isLoading, isError, data, refetch} = useQuery({
      queryKey: ['pokemonsDataList'],
      queryFn: ()=> getPoketmonDataApi(apiUrl),
      staleTime: 100,
      cacheTime: 5000,
      //캐시타임이랑 바로 데이터 반영 안 되는 게 연관이 있는 것 같은데...
      refetchOnWindowFocus: false,
    })

    const { isLoading: detailLoading, isError: detailError, data: pokemonDetailData } = useQuery({
      queryKey: ['pokemonsDetailList'],  // Include the selected Pokémon's name in the query key
      queryFn: () => getPoketDetailApi(`https://pokeapi.co/api/v2/pokemon/1/`)
    });
    console.log(pokemonDetailData.id)
    console.log(pokemonDetailData.sprites.front_default)

    if (isLoading || detailLoading) return <span>Loading...</span>
    if (isError || detailError) return <span>Error! 데이터를 받아오는데 문제가 발생했습니다.</span>

    return (
      <>
        <SelectCardNum value={showCard} onChange={handleSelectChange}>
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="18">18</option>
        </SelectCardNum>
        <PageBtn onClick={() => { beforePageUrl(); refetch()}}><BiLeftArrow/></PageBtn>
        <CardList data={data} ></CardList>
        <PageBtn onClick={() => { nextPageUrl(); refetch()}}><BiRightArrow/></PageBtn>
      </>      
    )  
  }

  export default ShowPoketmonData;


  const PageBtn = styled.button`
  width: 100px;
  border-radius: 10px;
  height: 80px;
  align-items: center;
  color: #fff;
  font-size: 30px;
  margin-top: 300px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #86beff;
    transition: all 0.3s ease;
  }
`;

const SelectCardNum = styled.select`
  position: absolute;
  top: 120px;
  right: 120px;
  width: 130px;
  height: 25px;
  font-size: 16px;
  text-align: center;
  border-radius: 5px;
  color: #555;
  cursor: pointer;
  border: 3px solid #a9d5fb ;
  font-family: 'Roboto Slab', Georgia, 'Times New Roman', Times, serif;   
`;
