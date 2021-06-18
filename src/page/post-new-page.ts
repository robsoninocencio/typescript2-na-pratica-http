import Page from "./page";
import PostHttp from "../http/post-http";
import Form from "../components/form";
import ValidatorManager from "../components/validators/validator-manager";
import Validators from "../components/validators/validators";

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

  submit(): void {
    if (!this.isValid()) {
      return;
    }
    this.postHttp
      .save({
        title: Form.getValueFromField("#title"),
        body: Form.getValueFromField("#body"),
      })
      .then((obj) => this.goToPostList());
  }

  isValid(): boolean {
    const validator = new ValidatorManager([
      {
        selectorField: "#title",
        rules: [Validators.required],
        messageInvalid: "Título inválido",
      },
      {
        selectorField: "#body",
        rules: [Validators.required],
        messageInvalid: "Conteúdo inválido",
      },
    ]);
    return validator.isValid();
  }

  goToPostList(): void {
    window.location.href = "/post/post-list.html";
  }
}

new PostNewPage(new PostHttp());
