import { useQuery } from "react-query";

function Call() {
    const {isLoading, error, data} = useQuery({
      queryKey: ['pokemonData'],
      queryFn: () => 
      fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then(
        (res) => res.json(),
      ),
    })
    if(isLoading) return `로딩 중입니다...`
    if (error) return `에러가 발생했습니다!!`
    console.log(data)
    //+ error.message
    return (
      <div>
        <p style={{color:"white", fontSize:"30px"}}>{data.results[0].name}</p>
      </div>
    )
  }
  
  export default Call;