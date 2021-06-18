export default abstract class Table {
  constructor(
    private selector,
    private columns: Array<string>,
    private _data?: Array<any>
  ) {}

  protected createRows() {
    for (let row of this._data) {
      const tr = document.createElement("tr");
      for (let column of this.columns) {
        this.createColumn(tr, row[column]);
        this.getElement().appendChild(tr);
      }
    }
  }

  protected createColumn(trRow, columnData: any) {
    let td = document.createElement("td");
    td.innerHTML = columnData;
    trRow.appendChild(td);
  }

  protected getElement() {
    return document.querySelector(this.selector);
  }

  make() {
    this.createRows();
  }

  set data(value) {
    this._data = value;
  }
}
