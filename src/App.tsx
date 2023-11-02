import { useQuery } from "react-query"
import axios from "axios"
import { useState } from "react"

interface PokeDataT {
  name: string,
  url: string,
}

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
    <>
      <div>
        {
          pokeData.map((el) => (
            <div key={el.name}>
              <p>
                {el.name}
              </p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
