import Http from "./http";
import Response from "./response";

export default class PostHttp {
  private url = "https://jsonplaceholder.typicode.com/posts";
  private http: Http;

  constructor() {
    this.http = new Http();
  }
  query(): Promise<Array<any>> {
    return this.http.get(this.url).then(function (response: Response) {
      return JSON.parse(response.body);
    });
  }

  save() {}
}
