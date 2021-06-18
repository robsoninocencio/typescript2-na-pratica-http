define(["require", "exports", "./response"], function (require, exports, response_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HttpVerbs;
    (function (HttpVerbs) {
        HttpVerbs["GET"] = "GET";
        HttpVerbs["POST"] = "POST";
    })(HttpVerbs || (HttpVerbs = {}));
    var Http = /** @class */ (function () {
        function Http() {
        }
        Http.prototype.get = function (url) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var xhttp = _this.createXhttp(HttpVerbs.GET, url);
                _this.configureCallbacks(xhttp, resolve, reject);
                xhttp.send();
            });
        };
        Http.prototype.post = function (url, data) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var xhttp = _this.createXhttp(HttpVerbs.POST, url);
                _this.configureCallbacks(xhttp, resolve, reject);
                xhttp.send(JSON.stringify(data));
            });
        };
        Http.prototype.createXhttp = function (verb, url) {
            var xhttp = new XMLHttpRequest();
            xhttp.open(verb, url, true);
            return xhttp;
        };
        Http.prototype.configureCallbacks = function (xhttp, resolve, reject) {
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    var response = new response_1.default(this.responseText, this.status);
                    if (this.status.toString().startsWith("20")) {
                        resolve(response);
                    }
                    else {
                        if (this.status.toString().startsWith("40") ||
                            this.status.toString().startsWith("50")) {
                            reject(response);
                        }
                    }
                }
            };
        };
        return Http;
    }());
    exports.default = Http;
});
//# sourceMappingURL=http.js.map