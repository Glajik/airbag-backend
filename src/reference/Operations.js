import ReferenceSuper from './ReferenceSuper';

export default class Operations extends ReferenceSuper {
  constructor() {
    super({
      sheetName: 'operations',
      fields: 'uuid, locationLabel, name, label',
      numHeaders: 1,
    });
  }
}
