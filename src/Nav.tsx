import styled from "styled-components";
import { BsSearch } from 'react-icons/bs';
import logoImage from './assets/image/pokemon_logo.png';

function Nav() {
    return   <MenuNav>   
      <PokemonLogo/>
      <div>
          <div style={{width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
              <FilterArea>
                    <ul>
                        <li>가나다순</li>
                        <li>번호순</li>
                        <li>랜덤</li>
                    </ul>
              </FilterArea>
              <InputArea>
                <input type="text" id="search-box" placeholder="여기에 검색하세요" ></input>
                <BsSearch style={{fontSize:"30px", backgroundColor:"red"}}/>
              </InputArea>
              <div>
              <select style={{fontSize:"16px", textAlign:"center", marginLeft:"20px", height:"30px", borderRadius:"5px", cursor:"pointer"}}>
                <option value="10">10개씩 보기</option>
                <option value="20">20개씩 보기</option>
                <option value="30">30개씩 보기</option>
              </select>
              </div>
          </div>
      </div>
    </MenuNav>
  }
  
  export default Nav;

  const MenuNav = styled.section`
  background-color: #ffefef;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  width: 100%;
  height: 100px;
  ul {
    display: flex;
    background-color: green;
    justify-content: space-between;
    align-items: center;    
    li {
        font-weight: 600;
        font-size: 23px;
    }
  }
`;

const PokemonLogo = styled.div`
 background-image: url(${logoImage});
 width: 300px;
 height: 90px; 
 background-repeat: no-repeat;
 background-position: center;
 background-size: cover;
`;
const InputArea = styled.section`
    background-color: aquamarine;
    display: flex;
    align-items: center;
    padding: 10px 0;
    input {
        width: 400px;
        height: 35px;
        border-radius: 10px;
        font-size: 16px;
        padding: 0 10px;
        display: flex;
        margin: 0 10px;
        border: 3px solid gray;
    }
`;
const FilterArea = styled.section`
    display: flex;
    align-items: center;
    ul {
        font-size: 20px;
    }
`;