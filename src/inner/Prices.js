import { SheetWrapper } from '@airbag/sheet-wrapper';

export default class Prices extends SheetWrapper {
  constructor() {
    super({
      sheetName: 'prices',
      fields: 'uuid, partLabel, locationLabel, operationLabel, term, cost, penalty',
      numHeaders: 1,
    });
  }
}
