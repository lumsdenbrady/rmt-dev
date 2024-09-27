import { jobItemBasic } from "../types";
import JobListItem from "./JobListItem";
import Spinner from "./Spinner";

type jobListPropTypes = {
  jobItems:jobItemBasic[]
  isLoading: boolean
}

export function JobList({jobItems, isLoading}:jobListPropTypes) {
  return <ul className="job-list">
    {isLoading ? 
   ( <Spinner />)
    :
   ( jobItems.map((item)=>{
return <JobListItem key={item.id} jobItem={item}/>
    }))}
  </ul>;
}

export default JobList;
