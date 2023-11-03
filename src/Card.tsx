import styled from "styled-components";
function Card() {
    return   <>
    <CardSection>
        <img src="/" id="pokemon-img"></img>
        <h2 id="pokemon-name">파이리</h2>
        <p>파이리는 불을 뿜어낸다!</p>
    </CardSection>
    </>
  }  
  export default Card;

const CardSection = styled.section`
  background-color: #ccc;
  border-radius: 5px;
  width: 250px;
  height: 300px;
  padding: 0 15px;
  img {
    width: 160px;
  }
  h2 {
    font-weight: 800;
    font-size: 23px;
    padding-bottom: 1rem;
    text-align: center;
  }
   p {
    font-size: 18px;
    font-weight: 500;
   }
`;