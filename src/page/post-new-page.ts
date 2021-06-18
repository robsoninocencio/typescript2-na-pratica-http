import Page from "./page";
import PostHttp from "../http/post-http";

export default class PostNewPage implements Page {
  constructor(private postHttp: PostHttp) {
    this.init();
  }

  init(): void {
    this.postHttp
      .save({
        title: "title",
        body: "body",
      })
      .then((obj) => console.log(obj));

    document
      .querySelector("#my-form")
      .addEventListener("submit", (event: Event) => {
        event.preventDefault();
        this.submit();
        return false;
      });
  }

  submit() {}

  isValid(): boolean {}
}

new PostNewPage(new PostHttp());
