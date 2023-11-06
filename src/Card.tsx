import styled from "styled-components";

interface PokeData {
    key: number;
    name: string;
    url: string;
  }

function Card({key, name, url}: PokeData): JSX.Element {
    return   <>    
    <CardSection>
        <img src="/" id="pokemon-img" alt='pokemon'/>
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
    width: 100px;
    height: 130px;
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