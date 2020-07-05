import * as React from "react";
import "./jobCard.css";
import Text from "../atoms/Text/Text";
export interface JobCard {
  Title: string;
  Link: string;
  time: string;
}
const JobCard = ({ Title, Link, time }: JobCard) => {
  return (
    <div className="job-card-wapper">
      <div className="title">
        <Text label={Title} color="black" fontSize="small-medium"></Text>
        <Text label={Link} color="gray" fontSize="small-medium"></Text>
      </div>
      <div className="time">
        <Text label={time} color="gray" fontSize="small"></Text>
      </div>
    </div>
  );
};
export default JobCard;
