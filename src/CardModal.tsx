import styled from "styled-components";

function CardModal(): JSX.Element {
    return   <>    
    <CardContainer>
        <Overlay/>
        <ContentSection>
          <img src="/"></img>
          <h3>모달 창입니다</h3>
          <p>여기에 포켓몬의 디테일이 붙어야 해요.</p>
        </ContentSection>
    </CardContainer>
    </>
  }  
  export default CardModal;


 const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  inset: 0;
  z-index: 999;
`;
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;
const ContentSection = styled.section`
  position: fixed;
  width: 60rem;
  height: 50rem;
  background: #fff;
  padding: 5rem;
  border-radius: 30px;
  img {
    width: 100%;
    height: 30%;
  }
  h3 {
    font-size: 27px;
    font-weight: 600;    
  }
  p{
      font-size: 16px;
      margin-top: 2rem;
    }
`;
