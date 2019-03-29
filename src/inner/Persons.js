import { SheetWrapper } from '@airbag/sheet-wrapper';

export default class Persons extends SheetWrapper {
  constructor() {
    super({
      sheetName: 'persons',
      fields: 'uuid, name, account, alias, locationLabel',
      numHeaders: 1,
    });
  }
}
