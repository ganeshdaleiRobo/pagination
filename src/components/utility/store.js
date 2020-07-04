import { _featchAPI } from "../utility/APICall";
export const userArr = [];
_featchAPI(
  "https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty"
).then((data) => {
  for (var i = 0; i < data.length; i++) {
    _featchAPI(
      `https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`
    ).then((List) => {
      userArr.push(List);
    });
  }
});