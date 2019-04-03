import SheetWrapper from '@glajik/sheet-wrapper';

export default class Parts extends SheetWrapper {
  constructor() {
    super({
      sheetName: 'parts',
      fields: 'uuid, data',
      numHeaders: 1,
    });
  }
}
