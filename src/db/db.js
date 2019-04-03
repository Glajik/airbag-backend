/* eslint-disable import/prefer-default-export */
import SheetWrapper from '@glajik/sheet-wrapper';

class DB extends SheetWrapper {
  constructor(sheetName) {
    super({
      sheetName,
      fields: 'uuid, state',
      numHeaders: 1,
    });
  }

  get values() {
    return super.values.map(([uuid, data]) => [uuid, JSON.parse(data)]);
  }
}

export const Parts = new DB('parts');
export const Photos = new DB('photos');
export const States = new DB('states');
export const Comments = new DB('comments');
export const History = new DB('history');
