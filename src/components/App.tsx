import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import { jobItemBasic } from "../types";

function App() {
  // jobItem list logic
  const [jobItems, setJobItems] = useState<jobItemBasic[]>([]);
  const [isLoading, setIsLoading] = useState(false)

//handle search text logic
const [searchText, setSearchText] = useState("");
useEffect(()=>{
  console.log(searchText)
  fetchJobItems(searchText)


},[searchText])
const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  e.preventDefault();
  setSearchText(e.target.value)
}

  // here is where we fetch data from the api based on the search text.

  const fetchJobItems = async(searchText:string)=>{
    setIsLoading(true)
    try{
const res = await fetch(`${BASE_URL}?search=${searchText}`);
const data = await res.json();
console.log(data.jobItems);
if (!res.ok){
  console.log(data.description);
  setIsLoading(false)

  return;  
}
if (!data.jobItems) {
  setIsLoading(false)
  return}
else {
  setIsLoading(false)
setJobItems(()=>[...data.jobItems] as jobItemBasic[])
} 
  }
  catch (error){
    console.log(error);
    setIsLoading(false)
  }
}


  return (
    <>
  <Background />
  <Header >
  <SearchForm onChange={handleSearchChange} searchText={searchText}/>
    </Header>
  <Container />
  <Footer />
  </>
  )
}

export default App;
