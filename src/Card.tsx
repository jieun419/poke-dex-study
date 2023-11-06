import styled from "styled-components";

interface PokeData {
    poketId: number;
    key: number;
    name: string;
    url: string;
  }

function Card({poketId, name, key, url}: PokeData): JSX.Element {
    //왜 포켓몬 image주소가 없을까요?...일단 다른 사이트에서 랜덤 이미지로 넣어보긴 했는데...
    return   <>    
    <CardSection>
        //<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${poketId}.png`} alt='pokemon-img'/>
        <h2 id="pokemon-name">{name}</h2>
        <p>#0033</p>
        <div style={{display:"flex", justifyContent:"space-between"}}>            
            <SkillBtn>Fire</SkillBtn>
            <SkillBtn>Water</SkillBtn>            
        </div>
    </CardSection>
    </>
  }  
  export default Card;

const CardSection = styled.section`
  background-color: #f3f4f2;
  border-radius: 5px;
  width: 250px;
  height: 300px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.3);
  cursor: pointer;
  font-family: 'Roboto Slab', Georgia, 'Times New Roman', Times, serif;
  &:hover {
    transition: all 0.4s ease;
    transform: translateY(-3px)
  }  
  img {
    width: 100%;
    height: 65%;
    border: 1px solid black;
    border-radius: 5px;
  }
  h2 {
    font-weight: 800;
    font-size: 22px;
    padding: 1rem 0 0.4rem 0;
    text-align: center;
  }
   p {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    color: #535353;
   }
`;

const SkillBtn = styled.button`
  background-color: #ff7777;
  width: 100px;
  height: 25px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  margin: 1rem 0;
`;