define(["require", "exports", "../http/post-http", "../components/post-table"], function (require, exports, post_http_1, post_table_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostListPage = /** @class */ (function () {
        function PostListPage(postHttp, postTable) {
            this.postHttp = postHttp;
            this.postTable = postTable;
            this.init();
        }
        PostListPage.prototype.init = function () {
            this.getPosts();
        };
        PostListPage.prototype.getPosts = function () {
            var _this = this;
            this.postHttp.query().then(function (posts) {
                _this.postTable.data = posts;
                _this.postTable.make();
            });
        };
        return PostListPage;
    }());
    exports.default = PostListPage;
    var postHttp = new post_http_1.default();
    var postTable = new post_table_1.default("#my-table", ["title", "body"]);
    new PostListPage(postHttp, postTable);
});
//# sourceMappingURL=post-list-page.js.map