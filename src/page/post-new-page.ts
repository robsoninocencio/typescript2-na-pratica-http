import Page from "./page";
import PostHttp from "../http/post-http";
import Form from "../components/form";

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

  submit() {
    this.postHttp
      .save({
        title: Form.getValueFromField("#title"),
        body: Form.getValueFromField("#body"),
      })
      .then((obj) => this.goToPostList());
  }

  isValid(): boolean {}

  goToPostList(): void {
    window.location.href = "/post/post-list.html";
  }
}

new PostNewPage(new PostHttp());
