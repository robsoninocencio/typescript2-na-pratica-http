requirejs.config({
    baseUrl: "/js",
    paths: {
        "test": "test",
        "page/post-list-page": "page/post-list-page",
    }
});

requirejs(['page/post-list-page'], function () {

});