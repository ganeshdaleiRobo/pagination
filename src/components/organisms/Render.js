import React, { useEffect, useState } from "react";
import JobCard from "../molecules/JobCard";
import { _featchAPI } from "../utility/APICall";
import { convertTimeStampToData, convert } from "../utility/APICall";
import Button from "../atoms/button/Button";
const userArr = [];
let startIndex = 0;
let lastIndex = 30;
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
          setUserList(userArr.slice(startIndex, lastIndex));
        });
      }
    });
  }, []);

  const pagination = () => {
    startIndex = lastIndex;
    lastIndex += lastIndex;
    if (userArr.length <= lastIndex) {
      lastIndex = userArr.length;
      setUserList(userArr.slice(startIndex, lastIndex));
      startIndex = 0;
      lastIndex = 30;
    } else {
      setUserList(userArr.slice(startIndex, lastIndex));
    }
  };
  return (
    <div>
      {userList.map((value, index, arr) => {
        return (
          <JobCard
            Title={value.title}
            Link={value.by}
            time={String(convertTimeStampToData(value.time))}
          />
        );
      })}
      <div onClick={pagination}>
        <Button label="more.." color="gray" />
      </div>
    </div>
  );
};

export default Render;
