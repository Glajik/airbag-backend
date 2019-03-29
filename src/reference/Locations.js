import { SheetWrapper } from '@airbag/sheet-wrapper';

export default class Locations extends SheetWrapper {
  constructor() {
    super({
      sheetName: 'locations',
      fields: 'uuid, name, label',
      numHeaders: 1,
    });
  }
}
