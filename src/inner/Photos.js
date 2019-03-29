import { SheetWrapper } from '@airbag/sheet-wrapper';

// { uuid, partUuid, link, type, comment }

export default class Photos extends SheetWrapper {
  constructor() {
    super({
      sheetName: 'photos',
      fields: 'uuid, data',
      numHeaders: 1,
    });
  }
}
