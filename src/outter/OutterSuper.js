import SheetWrapper from '@glajik/sheet-wrapper';

export default class OutterSuper extends SheetWrapper {
  constructor(options, url) {
    super(options);
    this.url = url;
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

  get values() {
    return this.dataRange.getValues();
  }

  get formulas() {
    return this.dataRange.getFormulas();
  }

  get notes() {
    return this.dataRange.getNotes();
  }

  extractAll() {
    const { values, formulas, notes } = this;
    return values.map((rowValues, index) => ({
      valuesObj: super.toRowData(rowValues),
      formulasObj: super.toRowData(formulas[index]),
      notesObj: super.toRowData(notes[index]),
    })).slice(this.numHeaders); // remove header
  }
}
