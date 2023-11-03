import { useQuery } from "react-query"
import axios from "axios"
import { useState } from "react"
import styled from "styled-components"

interface PokeDataT {
  name: string,
  url: string,
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const PokeInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
  padding: 10px;
`

const PokeInfoBox = styled.div`
  background-color: #fff;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
`

const PokeName = styled.p`
  font-size: 0.8rem;
  padding: 10px;
`

const PageNation = styled.div`
  display: flex;
  gap: 10px;
  & > button {
    background-color: #444;
    border-radius: 10px;
    padding: 10px 15px;
    font-size: 1rem;
    color: #fff;
  }
`

function App() {
  const [pokeData, setPokeData] = useState<PokeDataT[]>([])
  const getPokeData = async () => {
    const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
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

  console.log(pokeData)

  return (
    <Main>
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
        <button>prev</button>
        <button>next</button>
      </PageNation>
    </Main>
  )
}

export default App
