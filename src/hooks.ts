import { useState, useEffect } from "react";
import { jobItemBasic } from "./types";
import { BASE_URL } from "./constants";


export  function useJobItems(searchText:string | null) {
  const [jobItems, setJobItems] = useState<jobItemBasic[]>([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
   
    if(!searchText) {return}
    fetchJobItems(searchText)
  
  
  },[searchText])

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
return [isLoading, jobItems] as const
}

export function useActiveId(){
    const [activeId, setActiveId] = useState("")
   
   useEffect(()=>{
    const handleHashChange = ()=>{
        // console.log(window.location.hash.slice(1));
       setActiveId ( window.location.hash.slice(1))
    }
    handleHashChange()
       window.addEventListener("hashchange",handleHashChange)

return ()=>{
    window.removeEventListener("hashchange", handleHashChange)
}

   },[])
   return activeId
}