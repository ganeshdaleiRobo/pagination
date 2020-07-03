import React, { useState, useEffect } from "react";
import {APICall} from '../utility/APICall';
const Render = () => {
  useEffect(() => {
    var data = APICall.Call("https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty")
    console.log(data)
  });
  return <div>Data</div>;
};
export default Render;
