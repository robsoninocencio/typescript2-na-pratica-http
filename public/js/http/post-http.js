define(["require", "exports", "./http", "../components/post-table"], function (require, exports, http_1, post_table_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostHttp = /** @class */ (function () {
        function PostHttp() {
            this.url = "https://jsonplaceholder.typicode.com/posts";
            this.http = new http_1.default();
        }
        PostHttp.prototype.query = function () {
            this.http.get(this.url).then(function (response) {
                console.log(JSON.parse(response.body));
                new post_table_1.default("#my-table>tbody", JSON.parse(response.body), [
                    "title",
                    "body",
                ]).make();
            });
        };
        PostHttp.prototype.save = function () { };
        return PostHttp;
    }());
    exports.default = PostHttp;
});
//# sourceMappingURL=post-http.js.map