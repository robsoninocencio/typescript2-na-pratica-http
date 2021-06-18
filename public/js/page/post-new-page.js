define(["require", "exports", "../http/post-http", "../components/form", "../components/validators/validator-manager", "../components/validators/validators"], function (require, exports, post_http_1, form_1, validator_manager_1, validators_1) {
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
            if (!this.isValid()) {
                return;
            }
            this.postHttp
                .save({
                title: form_1.default.getValueFromField("#title"),
                body: form_1.default.getValueFromField("#body"),
            })
                .then(function (obj) { return _this.goToPostList(); });
        };
        PostNewPage.prototype.isValid = function () {
            var validator = new validator_manager_1.default([
                {
                    selectorField: "#title",
                    rules: [validators_1.default.required],
                    messageInvalid: "Título inválido",
                },
                {
                    selectorField: "#body",
                    rules: [validators_1.default.required],
                    messageInvalid: "Conteúdo inválido",
                },
            ]);
            return validator.isValid();
        };
        PostNewPage.prototype.goToPostList = function () {
            window.location.href = "/post/post-list.html";
        };
        return PostNewPage;
    }());
    exports.default = PostNewPage;
    new PostNewPage(new post_http_1.default());
});
//# sourceMappingURL=post-new-page.js.map