define(["require", "exports", "./http"], function (require, exports, http_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostHttp = /** @class */ (function () {
        function PostHttp() {
            this.url = "https://jsonplaceholder.typicode.com/posts";
            this.http = new http_1.default();
        }
        PostHttp.prototype.query = function () {
            this.http.get(this.url).then(function (responseText) {
                console.log(JSON.parse(responseText));
            });
        };
        PostHttp.prototype.save = function () { };
        return PostHttp;
    }());
    exports.default = PostHttp;
});
//# sourceMappingURL=post-http.js.map