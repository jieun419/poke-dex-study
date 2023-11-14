import styled from "styled-components";
import PokeInfoCard from "../../components/cards/PokeInfoCard";
import { useQuery } from "react-query";
import { getPokeDataList } from "../../api/pokeApi";

const PokeInfoContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  padding: 10px;
`
interface PokeDataListT {
  name: string;
  url: string;
}

const PokeListContain = () => {
  const { data: pokeDataList } = useQuery({
    queryKey: ["pokeDataList"],
    queryFn: () => getPokeDataList(),
    onSuccess(data) {
      return data.results
    },
    onError(err) {
      console.log(err);
    },
  })

  return (
    <PokeInfoContainer>
      {
        pokeDataList?.results.map((el: PokeDataListT) => (
          <PokeInfoCard
            key={el.name}
            pokemonname={el.name}
          />
        ))
      }
    </PokeInfoContainer>
  );
};

export default PokeListContain;