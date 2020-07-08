import { _featchAPI } from "../components/utility/APICall";
export default  class service {
  baseUrl: string;
  subUrl: string;
  result:Array<Object> =[]
  constructor(url: string, suburl: string) {
    this.baseUrl = url;
    this.subUrl = suburl;
    this.APICall();
  
  }
  private APICall() {
    _featchAPI(this.baseUrl).then((res) => {
      for (var i = 0; i < res.length; i++) {
        _featchAPI(
          this.subUrl.split("item/")[0] +`item/${res[i]}.json?print=pretty`
        ).then((data) => {
         this.result.push(data);
        });
      }
    });
  }

  public getData(): any {
    return this.result;
  }
}
