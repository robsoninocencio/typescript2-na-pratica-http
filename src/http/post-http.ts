import Http from "./http";
import Response from "./response";
import PostTable from "../components/post-table";

export default class PostHttp {
  private url = "https://jsonplaceholder.typicode.com/posts";
  private http: Http;

  constructor() {
    this.http = new Http();
  }
  query() {
    this.http.get(this.url).then(function (response: Response) {
      console.log(JSON.parse(response.body));
      new PostTable("#my-table>tbody", JSON.parse(response.body), [
        "title",
        "body",
      ]).make();
    });
  }

  save() {}
}
