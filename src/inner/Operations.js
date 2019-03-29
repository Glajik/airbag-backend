import { SheetWrapper } from '@airbag/sheet-wrapper';

export default class Operations extends SheetWrapper {
  constructor() {
    super({
      sheetName: 'operations',
      fields: 'uuid, locationLabel, name, label',
      numHeaders: 1,
    });
  }
}
