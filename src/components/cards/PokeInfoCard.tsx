import styled from "styled-components"

const PokeInfoBox = styled.div`
  background-color: var(--box-bg-color);
  border: 1px solid var(--box-border);
  border-radius: 10px;
`

const PokeName = styled.p`
  color: var(--text-color);
  font-size: 0.8rem;
  padding: 10px;
`

interface PokeInfoPropsT {
  name: string;
}

const PokeInfoCard = ({ name }: PokeInfoPropsT) => {
  return (
    <PokeInfoBox>
      <PokeName>{name}</PokeName>
    </PokeInfoBox>
  );
};

export default PokeInfoCard;