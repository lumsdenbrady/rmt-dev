import { useActiveId } from "../hooks";
import { jobItemBasic } from "../types";
import BookmarkIcon from "./BookmarkIcon";

type jobListItemProps = {
  jobItem:jobItemBasic }

export default function JobListItem({jobItem}:jobListItemProps) {
  const { badgeLetters,
    company,
    daysAgo,
    id,
    title} = jobItem;



  return (
    <li className="job-item">
      <a className="job-item__link" href={`#${id}`} >
        <div className="job-item__badge">{badgeLetters}</div>

        <div className="job-item__middle">
          <h3 className="third-heading">{title}</h3>
          <p className="job-item__company">{company}</p>
        </div>

        <div className="job-item__right">
          <BookmarkIcon />
          <time className="job-item__time">{daysAgo}d</time>
        </div>
      </a>
    </li>
  );
}
