import Card from "./Card";
import Nav from "./Nav"
import styled from "styled-components";

function App() {
  return   <>
  <section id="home-section">
    <Nav/>
    <CardListSection>
      <Card/>
    </CardListSection>
  </section>
  </>
}

export default App;

const CardListSection = styled.section`
background-color: #4185c2;
margin: 10rem 10rem;
`;