define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Form = /** @class */ (function () {
        function Form() {
        }
        Form.getValueFromField = function (selector) {
            return document.querySelector(selector).value;
        };
        return Form;
    }());
    exports.default = Form;
});
//# sourceMappingURL=form.js.map