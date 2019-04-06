/* eslint-disable import/prefer-default-export */
import SheetWrapper from '@glajik/sheet-wrapper';
import isArray from 'lodash/isArray';
import isEqual from 'lodash/isEqual';

class DB extends SheetWrapper {
  toRowData(values) {
    const fn = (acc, value, index) => {
      const field = this.getField(index);
      if (!field) {
        return acc;
      }
      try {
        return { ...acc, [field]: JSON.parse(value) };
      } catch (error) {
        return { ...acc, [field]: value };
      }
    };
    return values.reduce(fn, {});
  }

  /**
   * Convert rowData object to array of row values
   * @return Array
   * @param {Object} rowData index of row, started from 1
   */
  toRowValues(rowData) {
    const fn = (acc, field) => {
      const value = rowData[field];
      if (value === undefined) {
        return [...acc, ''];
      }
      if (value instanceof Date) {
        return [...acc, value];
      }
      if (value instanceof Object) {
        return [...acc, JSON.stringify(value)];
      }
      return [...acc, value];
    };
    return this.fields.reduce(fn, []);
  }

  /**
   * Convert range values to collection of rowData.
   * Each row contains the row index rowId started from 1.
   * @param {array} values range values
   * @returns array of row objects
   */
  toRowDataColl(values) {
    // return chached result
    if (isEqual(values, this.memo.values)) return this.memo.rowDataColl;

    const dataValues = values.slice(this.numHeaders);
    const rowDataColl = [];
    const valuesCount = dataValues.length;
    const fieldsCount = this.fields.length;

    for (let i = 0; i < valuesCount; i++) { // eslint-disable-line no-plusplus
      const rowData = {};
      for (let j = 0; j < fieldsCount; j++) { // eslint-disable-line no-plusplus
        const field = this.getField(j);
        try {
          rowData[field] = JSON.parse(dataValues[i][j]);
        } catch (error) {
          rowData[field] = dataValues[i][j];
        }
      }
      rowData.rowId = i + 1 + this.numHeaders;
      rowDataColl.push(rowData);
    }
    // memoization
    this.memoize(values);
    this.memo.rowDataColl = this.clone(rowDataColl);
    return rowDataColl;
  }

  /**
   * @returns Nested arrays, which represent a rows and columns
   * @param {*} rowDataColl Collection of rowData object
   * @param {*} headerValues If present, output has this values in the top
   */
  toRowValuesColl(rowDataColl, headerValues) {
    const cloned = this.clone(rowDataColl);
    const dataCollCount = cloned.length;
    const fieldsCount = this.fields.length;

    const dataValues = [];
    for (let i = 0; i < dataCollCount; i++) { // eslint-disable-line no-plusplus
      const rowData = cloned[i];
      const rowValues = [];
      for (let j = 0; j < fieldsCount; j++) { // eslint-disable-line no-plusplus
        const field = this.getField(j);
        const value = rowData[field];
        if (value === undefined) {
          rowValues.push('');
        }
        if (value instanceof Date) {
          rowValues.push(value);
        }
        if (value instanceof Object) {
          rowValues.push(JSON.stringify(value));
        }
        rowValues.push(value);
      }
      dataValues.push(rowValues);
    }

    // memoization
    this.memo.rowDataColl = cloned;
    const oldHeaderValues = this.memo.headerValues;
    // eslint-disable-next-line max-len
    const values = isArray(headerValues) ? [...headerValues, ...dataValues] : [...oldHeaderValues, ...dataValues];
    this.memoize(values);
    return values;
  }
}

const options = {
  fields: 'uuid, state',
  numHeaders: 1,
};

export const parts = new DB({ ...options, sheetName: 'parts' });
export const photos = new DB({ ...options, sheetName: 'photos' });
export const states = new DB({ ...options, sheetName: 'states' });
export const comments = new DB({ ...options, sheetName: 'comments' });
export const history = new DB({ ...options, sheetName: 'history' });
