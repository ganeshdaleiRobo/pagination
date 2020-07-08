import React, { useEffect, useState } from "react";
import { _featchAPI } from "../utility/APICall";
import JobsOrganisms from "../organisms/jobs/JobsOrganisms";
const userArr: any = [];
const Render = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    _featchAPI(
      " https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty"
    ).then((data) => {
      for (var i = 0; i < data.length; i++) {
        _featchAPI(
          ` https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`
        ).then((List) => {
          userArr.push(List);
          setUserList(userArr.slice(0, 30));
        });
      }
    });
  }, []);

  return (
    <div>
      <JobsOrganisms data={[...userList]} />
    </div>
  );
};

export default Render;
