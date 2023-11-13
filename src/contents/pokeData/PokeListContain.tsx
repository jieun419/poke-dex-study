import styled from "styled-components";
import PokeInfoCard from "../../components/cards/PokeInfoCard";
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";

const PokeInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
  padding: 10px;
`
interface PokeDataT {
  name: string,
  url: string,
}

const PokeListContain = () => {
  const [pokeData, setPokeData] = useState<PokeDataT[]>([]);
  const LIMIT = 20

  const getPokeData = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`)
    return res.data
  }

  useQuery({
    queryKey: ["pokeData"],
    queryFn: () => getPokeData(),
    onSuccess(data) {
      setPokeData(data.results)
    },
    onError(err) {
      console.log(err);
    },
  })

  console.log(pokeData)

  return (
    <PokeInfoContainer>
      {
        pokeData.map((el) => (
          <PokeInfoCard
            name={el.name}
            key={el.name}
          />
        ))
      }
    </PokeInfoContainer>
  );
};

export default PokeListContain;