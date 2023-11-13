import GetPoketmonData from "./GetPoketmonData";
import Nav from "./Nav"
import styled from "styled-components";
import { QueryClient, QueryClientProvider} from "react-query";
import Sidebar from "./Sidebar";
import CardModal from "./CardModal";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "./store/modalSlice";

const queryClient = new QueryClient();

function App() {
  const {isOpen} = useSelector((store)=> store.modal);
  const dispatch = useDispatch();
  return <QueryClientProvider client={queryClient}>
  <section id="home-section" style={{height:"100%", position:"relative", backgroundColor:"red"}} onClick={()=>{
    dispatch(closeModal())
  }}>    
    <Nav/>
    <Sidebar/>
    <CardListSection >
      <GetPoketmonData/>
        {isOpen &&<CardModal />}
    </CardListSection>    
  </section>
  <ModalBtn onClick={()=>{
      dispatch(openModal())
    }}>모달열림</ModalBtn>
  </QueryClientProvider>
}
export default App;

const CardListSection = styled.section`
  padding: 50px 50px 150px 150px;
  background-color: #4185c2;
  height: 100%;
  width: 100%;
  display: flex;
`;
const ModalBtn = styled.button`
background-color: black;
border-radius: 50%;
color: white;
width: 200px;
height: 200px;
z-index:999;
text-align: center;
align-items: center;
margin-left: 50%;
`;

