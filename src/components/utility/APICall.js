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
