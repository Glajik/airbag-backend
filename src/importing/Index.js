import { makeMap } from './helpers';

export default class Index {
  constructor(dataColl) {
    this.dataColl = dataColl;
    this.memoIndex = {};
  }

  getFor(name) {
    if (this.memoIndex[name] === undefined) {
      this.memoIndex[name] = makeMap(this.dataColl, name);
    }
    return this.memoIndex[name];
  }

  get index() {
    return this.memoIndex;
  }

  get(name, key) {
    const index = this.getFor(name);
    return index[key] || {};
  }

  has(name, key) {
    const index = this.getFor(name);
    return index[key] !== undefined;
  }

  toArray(name) {
    const index = this.getFor(name);
    return Object.keys(index).map(key => index[key]);
  }
}
