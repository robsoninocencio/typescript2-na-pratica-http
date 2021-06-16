define(["require", "exports", "http/post-http", "module1"], function (require, exports, post_http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function getPost(responseText) {
        console.log(responseText);
    }
    new post_http_1.default().query(getPost);
    console.log("test");
});
//# sourceMappingURL=test.js.map