import { useQuery } from "react-query";
function CardCall(): JSX.Element {
    const {isLoading, error, data} = useQuery({
      queryKey: ['eachPokemonData'],
      queryFn: () => 
      fetch(`${props.data}`).then(
        (res) => res.json(),
      ),
    })
    if(isLoading) return `로딩 중입니다...`
    if (error) return `에러가 발생했습니다!!`
    return (   <p style={{color:"white", fontSize:"20px"}}>
        {data.height}
        </p>
    )  
  }

  export default CardCall;