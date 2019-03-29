import { SheetWrapper } from '@airbag/sheet-wrapper';

export default class Statuses extends SheetWrapper {
  constructor() {
    super({
      sheetName: 'statuses',
      fields: 'uuid, locationLabel, name, label',
      numHeaders: 1,
    });
  }
}
