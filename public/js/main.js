requirejs.config({
    baseUrl: "/js",
    paths: {
        "page/post-list-page": "page/post-list-page",
        "page/post-new-page": "page/post-new-page",
    }
});

requirejs([MODULE_INITIALIZER], function () {

});