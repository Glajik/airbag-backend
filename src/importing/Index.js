import { makeMap } from './helpers';

export default class Index {
  constructor(dataColl) {
    this.dataColl = dataColl;
    this.memoIndex = {};
  }

  /**
   * @param {*} pivot pivot of index
   */
  getFor(pivot) {
    if (this.memoIndex[pivot] === undefined) {
      this.memoIndex[pivot] = makeMap(this.dataColl, pivot);
    }
    return this.memoIndex[pivot];
  }

  get index() {
    return this.memoIndex;
  }

  get(pivot, key) {
    const index = this.getFor(pivot);
    return index[key] || {};
  }

  has(pivot, key) {
    const index = this.getFor(pivot);
    return index[key] !== undefined;
  }

  toArray(pivot) {
    const index = this.getFor(pivot);
    return Object.keys(index).map(key => index[key]);
  }
}
