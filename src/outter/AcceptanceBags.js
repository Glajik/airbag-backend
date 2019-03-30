import { SheetWrapper } from '@glajik/sheet-wrapper';

// Приемка Мешки
const url = 'https://docs.google.com/spreadsheets/d/1hPhnk146eikavhiSupiur4DXL9XFzQk8cF8WWABojAs/edit';

const options = {
  sheetName: 'Мешки',
  numHeaders: 1,
  fields: [
    'orderId',
    'partName', // имя запчасти
    'model', // скрыт
    'color', // скрыт
    'issueDate',
    'sentToProductionStatus',
    'sentToProductionDate',
    'acceptedStatus',
    'acceptedDate',
    'readyStatus',
    'readyDate',
    'returnStatus',
    'returnDate',
    'reward',
    'cost',
    'penalty',
  ],
};

export default class AcceptanceBags extends SheetWrapper {
  constructor() {
    super(options);

    this.url = url;
  }

  get spreadsheet() {
    // eslint-disable-next-line no-undef
    return SpreadsheetApp.openByUrl(this.url);
  }

  get formulas() {
    return this.spreadsheet.getDataRange().getFormulas();
  }

  get notes() {
    return this.sheet.getDataRange().getNotes();
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
