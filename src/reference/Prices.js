import ReferenceSuper from './ReferenceSuper';

export default class Prices extends ReferenceSuper {
  constructor() {
    super({
      sheetName: 'prices',
      fields: 'uuid, partLabel, locationLabel, operationLabel, term, cost, penalty',
      numHeaders: 1,
    });
  }
}
