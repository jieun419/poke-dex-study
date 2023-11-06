import styled from "styled-components";


export const MenuNav = styled.section`
  background-color: #ffefef;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  width: 100%;
  height: 100px;
  img {
    width: 300px;
    height: 50px;
  }
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
