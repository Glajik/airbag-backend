import { expect } from 'chai';
import Index from '../src/importing/Index';
import extractParts from '../src/importing/extractParts';
import plasticSample from './plasticSample';

describe('Importing parts', () => {
  it('Should make plain object from plasticSample as in assertion', () => {
    const partTypeColl = [{
      uuid: '8d4f5154-4900-4163-8974-f307d1397420',
      class: 'wheel',
      name: 'wheel',
      label: 'Руль стандарт',
      alias: 'Руль',
      airbagAlias: 'wheel_coverRef',
    }];

    const assertion = [{
      uuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      label: 'Руль стандарт',
      partType: {
        uuid: '8d4f5154-4900-4163-8974-f307d1397420',
        class: 'wheel',
        name: 'wheel',
        label: 'Руль стандарт',
      },
      state: {},
      orderId: 1234,
      model: 'Tesla',
      color: 'Бежевый',
      appendedAt: { orderId: 1234, field: 'start' },
    }];

    const data = [plasticSample];
    const result = extractParts(data, { partTypeIndex: new Index(partTypeColl) });
    const [first] = result;
    expect(first).is.haveOwnProperty('uuid');
    expect(result).is.deep.equal(assertion);
  });
});
