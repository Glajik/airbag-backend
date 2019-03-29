import ReferenceSuper from './ReferenceSuper';

export default class Statuses extends ReferenceSuper {
  constructor() {
    super({
      sheetName: 'statuses',
      fields: 'uuid, locationLabel, name, label',
      numHeaders: 1,
    });
  }
}
