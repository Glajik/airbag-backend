import { expect } from 'chai';
import { normalize } from 'normalizr';
import parts from './schema/partsSchema';
import { before, after } from './schema/partPhotosSchema';
import plasticSample from './plasticSample';

// eslint-disable-next-line no-unused-vars
const output = (prop, { entities, result }) => result.forEach(id => console.log(id, '=>', entities[prop][id]));

describe('Normalizr', () => {
  it('parts', () => {
    const data = [plasticSample];
    const normalized = normalize(data, [parts]);
    expect(normalized).is.haveOwnProperty('entities');
    expect(normalized).is.haveOwnProperty('result');
    // output('parts', normalized);
  });
  it('before', () => {
    const data = [plasticSample];
    const normalized = normalize(data, [before]);
    expect(normalized).is.haveOwnProperty('entities');
    expect(normalized).is.haveOwnProperty('result');
    // console.log(JSON.stringify(normalized));
    // output('before', normalized);
  });
  it('after', () => {
    const data = [plasticSample];
    const normalized = normalize(data, [after]);
    expect(normalized).is.haveOwnProperty('entities');
    expect(normalized).is.haveOwnProperty('result');
    // output('after', normalized);
  });
  it('union', () => {
    const data = [plasticSample];
    const union = (data1, data2) => {
      const result = [...data1.result, ...data2.result];
      const entities = { ...data1.entities.before, ...data2.entities.after };
      return result.map(id => entities[id]).filter(({ url }) => url !== undefined);
    };
    const result = union(normalize(data, [before]), normalize(data, [after]));
    expect(result).length(1);
  });
});
