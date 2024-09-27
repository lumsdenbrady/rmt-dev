import { jobItemBasic } from "../types";
import JobList from "./JobList";
import PaginationControls from "./PaginationControls";
import ResultsCount from "./ResultsCount";
import SortingControls from "./SortingControls";

type sidebarPropTypes = {
  jobItems: jobItemBasic[];
  isLoading:boolean;
}

export default function Sidebar({jobItems, isLoading}:sidebarPropTypes) {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <ResultsCount />
        <SortingControls />
      </div>
      <JobList isLoading={isLoading} jobItems={jobItems} />
<PaginationControls />


      </div>
  );
}
