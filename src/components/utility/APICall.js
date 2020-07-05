export const APICall = async (url) => {
   let response =  await fetch(url);
   let result = await response.json();
    return result;
}
export const _featchAPI = async (url) => {
  let response;
  let result;
  try {
    response = await fetch(url);
    result = await response.json();
  } catch (error) {}
  return result;
};
export const convertTimeStampToData = (timeStamp)=>{
 var date = new Date(timeStamp);
  return date;
}
export const convert = (str)=> {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}

