import ReferenceSuper from './ReferenceSuper';
import { makeMap } from '../importing/helpers';

export default class Persons extends ReferenceSuper {
  constructor() {
    super({
      sheetName: 'persons',
      fields: 'uuid, name, account, alias, locationLabel',
      numHeaders: 1,
    });
  }

  getIndex(field) {
    const has = key => this.fields.some(f => f === key);
    if (!has(field)) return {};
    if (this.memo.index[field] === undefined) {
      this.memo.index[field] = makeMap(this.dataColl, field);
    }
    return this.memo.index[field];
  }

  findByAlias(alias) {
    const index = this.getIndex('alias');
    const result = index[alias];
    return result || {};
  }
}
