export const APICall = (function () {
  var publicProperty = "I am a public property";
  async function fetchHTMLFromWebSit(url) {
    let response = await axios
      .get(url)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    const html = response;
    const $ = cheerio.load(html);
    return $;
  } 

  
  const _featchAPI = (url) => {
    var result = [];
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        result.push([...data]);
      })
      .catch((error) => {});
    return result;
  };

  return {
    Call: _featchAPI,
    publicProperty: publicProperty,
  };
})();
