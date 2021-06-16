import Http from "./http";

export default class PostHttp {
  private url = "https://jsonplaceholder.typicode.com/posts";
  private http: Http;

  constructor() {
    this.http = new Http();
  }
  query(calable) {
    this.http.get(this.url, calable);
  }

  save() {}
}
