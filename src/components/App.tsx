import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../constants";
import Background from "./Background";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import SearchForm from "./SearchForm";

function App() {
  // jobItem list logic
  const [jobItems, setJobItems] = useState<string[]>([]);

//handle search text logic
const [searchText, setSearchText] = useState("");
const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
  e.preventDefault();
  setSearchText(e.target.value)
  fetchJobItems(searchText)
}

  // here is where we fetch data from the api based on the search text.

  const fetchJobItems = async(searchText:string): Promise<string[]>=>{
const res = await fetch(`${BASE_URL}?search=${searchText}`);
const data = await res.json();
console.log(data);
setJobItems([])

return []
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
