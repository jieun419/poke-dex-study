import styled from "styled-components"
import ToggleThemeButton from "./components/button/ToggleThemeButton"
import PageNation from "./components/pageNation/PageNation"
import PokeListContain from "./contents/pokeData/PokeListContain"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`
function App() {
  return (
    <Main>
      <ToggleThemeButton />
      <PokeListContain />
      <PageNation />
    </Main>
  )
}

export default App
