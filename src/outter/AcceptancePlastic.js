import { SheetWrapper } from '@airbag/sheet-wrapper';

// Приемка Пластик
const url = 'https://docs.google.com/spreadsheets/d/10jo0P_nyUju2mjgydSo1PVXcAQc1DkZQjs9K8-47W2Q/edit';

const options = {
  sheetName: 'Цех пластика',
  numHeaders: 1,
  fields: [
    'orderId',
    'partName',
    'model',
    'color',
    'issueDate',
    'sentToProductionStatus',
    'sendLinkToPhoto',
    'sentToProductionDate',
    'acceptedStatus',
    'acceptedDate',
    'readyStatus',
    'readyDate',
    'returnStatus',
    'returnLinkToPhoto',
    'returnDate',
    'reward',
    'cost',
    'penalty',
    'commentPlastic',
  ],
};

export default class AcceptancePlastic extends SheetWrapper {
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
