import React, { useEffect, useState } from "react";
import JobCard from "../molecules/JobCard";
import { _featchAPI } from "../utility/APICall";
import {convertTimeStampToData, convert} from '../utility/APICall';
const userArr = [];
let startIndex = 0;
let endIndex = 50;
console.log(convertTimeStampToData(1593688844))
const Render = () => {
  const [userList, setUserList] = useState(0);
  useEffect(()=>{
    _featchAPI(
      " https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty"
    ).then((data) => {
      for (var i = 0; i < data.length; i++) {
        _featchAPI(
          ` https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`
        ).then((List) => {
          userArr.push(List);
          if (userArr.length === data.length) {
            setUserList([...userArr])
          }
        });
      }
    });
  })

  return (
    <div>
      {
       userArr.map((value,index,arr)=>{
        console.log()
        return <JobCard Title={value.title} Link="dfdfd" time={convert(String(convertTimeStampToData(value.time)))} />
       })
      }
      
    </div>
  );
};

export default Render;
