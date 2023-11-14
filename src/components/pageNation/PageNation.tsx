import styled from "styled-components";
import PageNationButton from "../button/PageNationButton";

const PageNationContainer = styled.div`
  display: flex;
  gap: 10px;
`

const PageNation = () => {
  return (
    <PageNationContainer>
      <PageNationButton>prev</PageNationButton>
      <PageNationButton>next</PageNationButton>
    </PageNationContainer>
  );
};

export default PageNation;