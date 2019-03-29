import ReferenceSuper from './ReferenceSuper';

export default class Locations extends ReferenceSuper {
  constructor() {
    super({
      sheetName: 'locations',
      fields: 'uuid, name, label',
      numHeaders: 1,
    });
  }
}
