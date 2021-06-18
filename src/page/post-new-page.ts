import Page from "./page";
import PostHttp from "../http/post-http";

export default class PostNewPage implements Page {
  constructor(private postHttp: PostHttp) {
    this.init();
  }

  init(): void {
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
