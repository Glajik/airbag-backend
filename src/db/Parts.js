import SheetWrapper from '@glajik/sheet-wrapper';

export default class Parts extends SheetWrapper {
  constructor() {
    super({
      sheetName: 'parts',
      fields: 'uuid, data, acceptance, plastic, roofs, bags',
      numHeaders: 1,
    });
  }
}
