import styled from "styled-components"
import { getPokeDetailData } from "../../api/pokeDetailData";
import { useQuery } from "react-query";

const PokeInfoBox = styled.div`
  background-color: var(--box-bg-color);
  border: 1px solid var(--box-border);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

const PokeName = styled.h3`
  color: var(--text-color);
  font-size: 1rem;
  font-weight: bold;
  padding: 10px;
`
const TypeBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 5px;
`

const Type = styled.span`
  background-color: #eee;
  font-size: 0.8rem;
  border-radius: 50px;
  padding: 3px 8px;
`
interface PokeInfoPropsT {
  pokemonname: string;
}

const PokeInfoCard = ({ pokemonname }: PokeInfoPropsT) => {
  const { data: pokeDetailData } = useQuery({
    queryKey: ["pokemonDetailData", pokemonname],
    queryFn: () => getPokeDetailData(pokemonname),
    onError(err) {
      console.log(err);
    },
  })

  return (
    <PokeInfoBox>
      <PokeName>{pokeDetailData?.name}</PokeName>
      <img src={pokeDetailData?.sprites.front_default} alt={pokeDetailData?.name} />
      <TypeBox>
        {pokeDetailData?.types.map((el) => (
          <Type key={el.slot}>{el.type.name}</Type>
        ))}
      </TypeBox>
    </PokeInfoBox>
  );
};

export default PokeInfoCard;