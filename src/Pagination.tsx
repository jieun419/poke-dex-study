import styled from "styled-components";
import { BiLeftArrow } from 'react-icons/bi';
import { BiRightArrow } from 'react-icons/bi';
function Pagination() {
    return   <PaginationSection>
        <PageNumber><BiLeftArrow style={{fontSize:"24px"}}/></PageNumber>
        <PageNumber>1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber><BiRightArrow style={{fontSize:"24px"}}/></PageNumber>
    </PaginationSection>
  }
  
  export default Pagination;

  const PaginationSection = styled.section`
  width: 100%;
  background-color: ghostwhite;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

  const PageNumber = styled.button`
    display: flex;
    justify-content: center;
    background-color: #fec20c;
    height: 40px;
    width: 70px;
    border-radius: 20px;
    margin: 30px;
    text-align: center;
    align-items: center;
    font-size: 16px;
    font-weight: 900;
    color: #2d4596;
    cursor: pointer;
    &:hover {
     background-color: #ffd864;
     transition: all 0.2s ease;
    }
`;