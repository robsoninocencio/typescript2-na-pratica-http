import "module1";
import PostHttp from "http/post-http";

function getPost(responseText) {
  console.log(responseText);
}

new PostHttp().query(getPost);
console.log("test");
