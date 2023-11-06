import { useQuery } from "react-query"
import axios from "axios"
import { useState } from "react"
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./store"
import { themeActions } from "./store/theme-slice"

interface PokeDataT {
  name: string,
  url: string,
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
`

const PokeInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
  padding: 10px;
`

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

const PageNation = styled.div`
  display: flex;
  gap: 10px;
`

const EventButton = styled.button`
  background-color: var(--button-bg-color);
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 1rem;
  color: var(--button-text-color);
`

function App() {
  const dispatch = useDispatch();
  const [pokeData, setPokeData] = useState<PokeDataT[]>([]);
  const themeType = useSelector((state: RootState) => state.themeType.themeMode);
  const LIMIT = 20

  const getPokeData = async () => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`)
    return res.data
  }

  useQuery({
    queryKey: ["pokeData"],
    queryFn: () => getPokeData(),
    onSuccess(data) {
      setPokeData(data.results)
    },
    onError(err) {
      console.log(err);
    },
  })

  const onChangeTheme = (theme: string) => {
    localStorage.setItem('THEME', theme)
  }

  const handleToggleTheme = () => {
    if (themeType === 'dark') {
      onChangeTheme('light');
      dispatch(themeActions.lightMode());
    } else {
      onChangeTheme('dark');
      dispatch(themeActions.darkMode());
    }
  }

  return (
    <Main>
      <EventButton onClick={handleToggleTheme}>{themeType === 'dark' ? '🌞 Light' : '🌚 Dark'}</EventButton>
      <PokeInfoContainer>
        {
          pokeData.map((el) => (
            <PokeInfoBox key={el.name}>
              <PokeName>
                {el.name}
              </PokeName>
            </PokeInfoBox>
          ))
        }
      </PokeInfoContainer>
      <PageNation>
        <EventButton>prev</EventButton>
        <EventButton>next</EventButton>
      </PageNation>
    </Main>
  )
}

export default App
