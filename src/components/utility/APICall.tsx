export const _featchAPI = async (url:string) => {
  let response;
  let result;
  try {
    response = await fetch(url);
    result = await response.json();
  } catch (error) {}
  return result;
};

export const convertTimeStampToData = (timeStamp:any)=>{
 var date = new Date(timeStamp);
  return date;
}
export const convert = (str:string)=> {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

export const miliSecToTime = (ms: number) => {
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  let min = Math.floor((ms / (1000 * 60)) % 60);
  let sec = Math.floor((ms / 1000) % 60);

  if (hours < 24) {
    return hours + " hrs ago";
  } else if (min < 60) {
    return min + " min ago";
  } else if (sec < 60) {
    return sec + " sec ago";
  }
};