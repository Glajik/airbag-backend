import SheetWrapper from '@glajik/sheet-wrapper';

export default class OutterSuper extends SheetWrapper {
  constructor(options, url) {
    super(options);
    this.url = url;
    this.limit = 0;
    this.start = 0;
  }

  get spreadsheet() {
    // eslint-disable-next-line no-undef
    return SpreadsheetApp.openByUrl(this.url);
  }

  get dataRange() {
    if (this.memo.dataRange === undefined) {
      this.memo.dataRange = this.spreadsheet.getDataRange();
    }
    return this.memo.dataRange;
  }

  limitTo(number) {
    this.limit = number;
    return this;
  }

  startFrom(number) {
    this.start = number;
    return this;
  }

  slice(coll) {
    if (this.limit <= 0 || this.start < 0) return coll.slice(this.numHeaders);
    if (this.limit < this.start) return coll.slice(this.numHeaders);
    return coll
      .slice(this.numHeaders)
      .slice(this.start, this.limit);
  }

  get values() {
    return this.slice(this.dataRange.getValues());
  }

  get formulas() {
    return this.slice(this.dataRange.getFormulas());
  }

  get notes() {
    return this.slice(this.dataRange.getNotes());
  }

  extractAll() {
    const { values, formulas, notes } = this;
    const { length } = values;
    const result = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < length; i++) {
      result.push({
        // eslint-disable-next-line no-undef
        uuid: Utilities.getUuid(),
        // eslint-disable-next-line no-undef
        valuesObj: super.toRowData(values[i]),
        formulasObj: super.toRowData(formulas[i]),
        notesObj: super.toRowData(notes[i]),
      });
    }
    return result;
  }
}
