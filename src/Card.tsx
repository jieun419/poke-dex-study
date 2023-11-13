import styled from "styled-components";
interface PokeData {
    poketId: number;
    name: string;
    url: string;
  }

function Card({poketId, name, url}: PokeData): JSX.Element {
    return   <>    
    <CardSection>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${poketId+1}.png`} alt='pokemon-img'/>
        {/*https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif 이쪽도 참고*/}
        <h2 id="pokemon-name">{name}</h2>
        <p>#{poketId}</p>
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
    transform: translateY(-6px);    
  }  
  &:active {
    transition: all 0.5s ease;
    transform: translateY(-6px); 
    transform:rotate3d(0, 1, 0, 180deg) ;
    }
  img {
    width: 100%;
    height: 65%;
    border: 1px solid #535353;
    border-radius: 5px;
  }
  h2 {
    font-weight: 800;
    font-size: 22px;
    padding: 1rem 0 0.5rem 0;
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