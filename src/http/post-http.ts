import Http from "./http";

export default class PostHttp {
  private url = "https://jsonplaceholder.typicode.com/posts";
  private http: Http;

  constructor() {
    this.http = new Http();
  }
  query() {
    this.http.get(this.url).then(function (responseText) {
      console.log(JSON.parse(responseText);
    });
  }

  save() {}
}
