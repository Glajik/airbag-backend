import { SheetWrapper } from '@airbag/sheet-wrapper';

// { uuid, collection, oldSnapshot, newSnapshot, datestamp }

export default class History extends SheetWrapper {
  constructor() {
    super({
      sheetName: 'history',
      fields: 'uuid, data',
      numHeaders: 1,
    });
  }
}
