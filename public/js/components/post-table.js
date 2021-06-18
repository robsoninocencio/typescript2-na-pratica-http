var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./table"], function (require, exports, table_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PostTable = /** @class */ (function (_super) {
        __extends(PostTable, _super);
        function PostTable() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return PostTable;
    }(table_1.default));
    exports.default = PostTable;
});
//# sourceMappingURL=post-table.js.map