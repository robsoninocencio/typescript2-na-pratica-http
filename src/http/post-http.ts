export default class PostHttp {
  query(calable) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        calable(this.responseText);
      }
    };
    xhttp.send();
  }

  save() {}
}
