import omit from 'lodash/omit';
import { expect } from 'chai';
import Index from '../src/importing/Index';
import extractParts from '../src/importing/extractParts';
import plasticSample from './plasticSample';

describe('Importing parts', () => {
  it('Should make plain object from plasticSample as in assertion', () => {
    const assertion = [{
      uuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      name: '',
      partType: { partName: 'Руль' },
      state: {},
      orderId: 1234,
      model: 'Tesla',
      color: 'Бежевый',
      appendedAt: { orderId: 1234, field: 'start' },
    }];
    const data = [plasticSample];
    const result = extractParts(data);
    const [first] = result;
    expect(first).is.haveOwnProperty('uuid');
    expect(result).is.deep.equal(assertion);
  });
});
