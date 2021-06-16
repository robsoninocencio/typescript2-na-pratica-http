enum HttpVerbs {
  GET = "GET",
  POST = "POST",
}

export default class Http {
  get(url: string, calable) {
    let xhttp = this.createXhttp(HttpVerbs.GET, url);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        calable(this.responseText);
      }
    };
    xhttp.send();
  }

  private createXhttp(verb: HttpVerbs, url: string) {
    let xhttp = new XMLHttpRequest();
    xhttp.open(verb, url, true);
    return xhttp;
  }
}
