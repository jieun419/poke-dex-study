import styled from "styled-components";
function Card() {
    return   <>
    <CardSection>
        <img src="/" id="pokemon-img"></img>
        <h2 id="pokemon-name">파이리</h2>
        <p>#0033</p>
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <SkillBtn>불</SkillBtn>
            <SkillBtn>물</SkillBtn>
        </div>
    </CardSection>
    </>
  }  
  export default Card;

const CardSection = styled.section`
  background-color: #ccc;
  border-radius: 5px;
  width: 250px;
  height: 300px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.3);
  cursor: pointer;
  &:hover {
    transition: all 0.4s ease;
    transform: translateY(-3px)
  }  
  img {
    width: 100%;
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