import React, { useEffect, useState, useCallback, useMemo } from "react";
import { _featchAPI } from "../utility/APICall";
const userArr = [];
let startIndex = 0;
let endIndex = 50;
const Render = () => {
  const [userList, setUserList] = useState([]);
  _featchAPI(
    "https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty"
  ).then((data) => {
    for (var i = 0; i < data.length; i++) {
      _featchAPI(
        `https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`
      ).then((List) => {
        userArr.push(List);
        if (userArr.length === data.length) {
          pagination(userArr);
        }
      });
    }
  });

  const pagination = (arr) => {
    startIndex = endIndex;
    endIndex += endIndex;
    // console.log(arr.slice(startIndex, endIndex));
  };
  return <div>Data</div>;
};

export default Render;
