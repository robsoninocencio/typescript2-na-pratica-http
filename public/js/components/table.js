define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Table = /** @class */ (function () {
        function Table(selector, _data, columns) {
            this.selector = selector;
            this._data = _data;
            this.columns = columns;
        }
        Table.prototype.createRows = function () {
            for (var _i = 0, _a = this._data; _i < _a.length; _i++) {
                var row = _a[_i];
                var tr = document.createElement("tr");
                for (var _b = 0, _c = this.columns; _b < _c.length; _b++) {
                    var column = _c[_b];
                    this.createColumn(tr, row[column]);
                    this.getElement().appendChild(tr);
                }
            }
        };
        Table.prototype.createColumn = function (trRow, columnData) {
            var td = document.createElement("td");
            td.innerHTML = columnData;
            trRow.appendChild(td);
        };
        Table.prototype.getElement = function () {
            return document.querySelector(this.selector);
        };
        Table.prototype.make = function () {
            this.createRows();
        };
        return Table;
    }());
    exports.default = Table;
});
//# sourceMappingURL=table.js.map