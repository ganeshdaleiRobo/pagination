import * as React from "react";
import JobCard from "../../molecules/jobCards/JobCard";
import Button from "../../atoms/button/Button";
import { miliSecToTime } from "../../utility/APICall";
export type textColorType = "white" | "gray" | "lightgray" | "black" | "orange";
export type textWeightType = "normal" | "bold";
export type textSizeType = "small" | "small-medium" | "medium";

export interface JobsOrganismsProps {
  Title: string;
  Link?: string;
  color?: textColorType;
  weight?: textWeightType;
  style?: {};
}

const JobsOrganisms = (userList: any) => {
  return (
    <div>
      {userList.data.map((value: any) => {
        return (
          <JobCard
            Title={value.title}
            Link={value.by}
            time={String(miliSecToTime(value.time))}
          />
        );
      })}
      <div>
        <Button label="more.." color="gray" />
      </div>
    </div>
  );
};
export default JobsOrganisms;
