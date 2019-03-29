import { SheetWrapper } from '@airbag/sheet-wrapper';

export default class PartTypes extends SheetWrapper {
  constructor() {
    super({
      sheetName: 'partTypes',
      fields: 'uuid, class, name, label, airbagAlias',
      numHeaders: 1,
    });
  }
}
