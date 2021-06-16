requirejs.config({
    baseUrl: "/js",
    paths: {
        "test": "test",
        "module1": "module1"
    }
});

requirejs(['test'], function () {

});