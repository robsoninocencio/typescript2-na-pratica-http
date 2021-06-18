define(["require", "exports", "../form"], function (require, exports, form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ValidatorManager = /** @class */ (function () {
        function ValidatorManager(chainRules) {
            this.chainRules = chainRules;
        }
        ValidatorManager.prototype.isValid = function () {
            for (var _i = 0, _a = this.chainRules; _i < _a.length; _i++) {
                var ruleSet = _a[_i];
                for (var _b = 0, _c = ruleSet.rules; _b < _c.length; _b++) {
                    var rule = _c[_b];
                    var value = form_1.default.getValueFromField(ruleSet.selectorField);
                    var isValid = rule(value);
                    if (!isValid) {
                        alert(ruleSet.messageInvalid);
                        return false;
                    }
                }
            }
            return true;
        };
        return ValidatorManager;
    }());
    exports.default = ValidatorManager;
});
//# sourceMappingURL=validator-manager.js.map