import ReferenceSuper from './ReferenceSuper';

export default class PartTypes extends ReferenceSuper {
  constructor() {
    super({
      sheetName: 'partTypes',
      fields: 'uuid, class, name, label, acceptanceAlias, airbagField',
      numHeaders: 1,
    });
  }
}
