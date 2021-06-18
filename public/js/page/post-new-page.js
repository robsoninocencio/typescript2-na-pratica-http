define(["require", "exports", "../http/post-http", "../components/form"], function (require, exports, post_http_1, form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostNewPage = /** @class */ (function () {
        function PostNewPage(postHttp) {
            this.postHttp = postHttp;
            this.init();
        }
        PostNewPage.prototype.init = function () {
            var _this = this;
            document
                .querySelector("#my-form")
                .addEventListener("submit", function (event) {
                event.preventDefault();
                _this.submit();
                return false;
            });
        };
        PostNewPage.prototype.submit = function () {
            var _this = this;
            this.postHttp
                .save({
                title: form_1.default.getValueFromField("#title"),
                body: form_1.default.getValueFromField("#body"),
            })
                .then(function (obj) { return _this.goToPostList(); });
        };
        PostNewPage.prototype.isValid = function () { };
        PostNewPage.prototype.goToPostList = function () {
            window.location.href = "/post/post-list.html";
        };
        return PostNewPage;
    }());
    exports.default = PostNewPage;
    new PostNewPage(new post_http_1.default());
});
//# sourceMappingURL=post-new-page.js.map