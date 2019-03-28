import { SheetWrapper } from '@airbag/sheet-wrapper';

export default class Acceptance extends SheetWrapper {
  constructor() {
    super({
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
    });

    this.url = 'https://docs.google.com/spreadsheets/d/10jo0P_nyUju2mjgydSo1PVXcAQc1DkZQjs9K8-47W2Q/edit#gid=1674658446';
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
    }));
  }
}
