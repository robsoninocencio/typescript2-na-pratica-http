import Response from "./response";
enum HttpVerbs {
  GET = "GET",
  POST = "POST",
}

export default class Http {
  get(url: string): Promise<Response> {
    return new Promise((resolve, reject) => {
      let xhttp = this.createXhttp(HttpVerbs.GET, url);
      this.configureCallbacks(xhttp, resolve, reject);
      xhttp.send();
    });
  }

  post(url: string, data: object): Promise<Response> {
    return new Promise((resolve, reject) => {
      let xhttp = this.createXhttp(HttpVerbs.POST, url);
      this.configureCallbacks(xhttp, resolve, reject);
      xhttp.send(JSON.stringify(data));
    });
  }

  private createXhttp(verb: HttpVerbs, url: string) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(verb, url, true);
    return xhttp;
  }

  private configureCallbacks(xhttp, resolve, reject) {
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4) {
        const response = new Response(this.responseText, this.status);
        if (this.status.toString().startsWith("20")) {
          resolve(response);
        } else {
          if (
            this.status.toString().startsWith("40") ||
            this.status.toString().startsWith("50")
          ) {
            reject(response);
          }
        }
      }
    };
  }
}
