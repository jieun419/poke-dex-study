import styled from "styled-components";
function Pagination() {
    return   <PaginationSection>
        <PageNumber>이전</PageNumber>
        <PageNumber>1</PageNumber>
        <PageNumber>2</PageNumber>
        <PageNumber>3</PageNumber>
        <PageNumber>다음</PageNumber>
    </PaginationSection>
  }
  
  export default Pagination;

  const PaginationSection = styled.section`
  width: 100%;
  background-color: ghostwhite;
  display: flex;
  justify-content: center;
`;

  const PageNumber = styled.button`
    display: flex;
    background-color: red;
    height: 40px;
    width: 70px;
    border-radius: 20px;
    margin: 30px;
    text-align: center;
    align-items: center;
    font-size: 17px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    &:hover {
     background-color: #750909;
     transition: all 0.2s ease;
    }
`;