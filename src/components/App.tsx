
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import SearchForm from "./SearchForm";

import JobItemContent from "./JobItemContent";
import Sidebar from "./Sidebar";
import { useActiveId, useJobItems } from "../hooks";

function App() {
  //page logic
  const [page,setPage] = useState(1);

//handle search text logic
const [searchText, setSearchText] = useState("");
const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  e.preventDefault();
  setSearchText(e.target.value)
}
//jobItem logic
const [isLoading, jobItems] = useJobItems(searchText)

const getCurrentSeven = (page:number) =>{
  const currentPageListOfSeven = [...jobItems].slice(page-1,page*7)
  return currentPageListOfSeven 
 }

//current chosen state 
//get activeId logic to display the rest of the jobcontent as well as fetch it from server.

const activeId = useActiveId();
console.log(activeId)
  return (
    <>
  <Background />
  <Header >
  <SearchForm onChange={handleSearchChange} searchText={searchText}/>
    </Header>
  <Container >
  <Sidebar isLoading={isLoading} jobItems={getCurrentSeven(page)}/>
  <JobItemContent item={null}/>
    </Container>
  <Footer />
  </>
  )
}

export default App;
