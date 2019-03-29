import ReferenceSuper from './ReferenceSuper';

export default class Persons extends ReferenceSuper {
  constructor() {
    super({
      sheetName: 'persons',
      fields: 'uuid, name, account, alias, locationLabel',
      numHeaders: 1,
    });
  }
}
