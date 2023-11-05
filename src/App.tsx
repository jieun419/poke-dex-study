import Card from "./Card";
import Nav from "./Nav"
import styled from "styled-components";
import { QueryClient, QueryClientProvider} from "react-query";
import Call from "./Call";
import Pagination from "./Pagination";
import Sidebar from "./Sidebar";

const queryClient = new QueryClient();
function App() {
  return <QueryClientProvider client={queryClient}>
  <section id="home-section" style={{height: "100%", position:"relative"}}>    
    <Nav/>
    <Sidebar/>
    <CardListSection>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Call/>
    </CardListSection>
    <Pagination/>
  </section>
  </QueryClientProvider>
}
export default App;

const CardListSection = styled.section`
  background-color: #4185c2;
  margin: 10rem 10rem;
  display: flex;
  justify-content: space-between;
`;

