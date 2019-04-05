import deepOmit from 'omit-deep-lodash';
import { expect } from 'chai';
import extractOrderComments from '../src/importing/extractOrderComments';
import Index from '../src/importing/Index';

// const content = readFileSync(plasticPath);
// const data = JSON.parse(content);
// expect(data).is.instanceof(Array);

describe('Importing comments', () => {
  it('Should make plain objects with full filled { person, receient } from airbagSample as in assertion', () => {
    const personColl = [{
      uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
      name: 'User',
      account: 'user@gmail.com',
      acceptanceAlias: 'UsernameAlias',
      airbagAlias: 'Chosen one',
      locationLabel: 'Приемка Экстрим',
    }];

    const locationColl = [{
      uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
      name: 'acceptance1',
      label: 'Приемка Экстрим',
    },
    {
      uuid: 'd851eb34-4cb7-4956-838b-ae82118d8c50',
      name: 'plastic',
      label: 'Пластик',
    },
    {
      uuid: '1c2eb8ba-a205-479f-a598-beb77f223eab',
      name: 'pads',
      label: 'Подушки',
    }];

    const assertion = [
      {
        uuid: 'comment-uuid',
        type: 'location',
        orderUuid: 'order-uuid',
        orderId: 1234,
        comment: 'This is comment for plastic',
        createdAt: new Date('2018-12-31T00:00:00.000Z'),
        person: {
          uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
          name: 'User',
          account: 'user@gmail.com',
          locationLabel: 'Приемка Экстрим',
        },
        recipient: {
          uuid: 'd851eb34-4cb7-4956-838b-ae82118d8c50',
          name: 'plastic',
          label: 'Пластик',
        },
      },
      {
        uuid: 'comment-uuid',
        type: 'location',
        orderUuid: 'order-uuid',
        orderId: 1234,
        comment: 'This is comment for pads',
        createdAt: new Date('2018-12-31T00:00:00.000Z'),
        person: {
          uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
          name: 'User',
          account: 'user@gmail.com',
          locationLabel: 'Приемка Экстрим',
        },
        recipient: {
          uuid: '1c2eb8ba-a205-479f-a598-beb77f223eab',
          name: 'pads',
          label: 'Подушки',
        },
      },
    ];

    const airbagCrmColl = [{
      uuid: 'order-uuid',
      valuesObj: {
        id: 1234,
        start: new Date('2018-12-31T00:00:00.000Z'),
        manager: 'Chosen one',
        commentPads: 'This is comment for pads',
        commentPlastic: 'This is comment for plastic',
      },
    }];

    const use = prop => ({ uuid, [prop]: data }) => ({ uuid, ...data });

    const indexes = {
      personIndex: new Index(personColl),
      locationIndex: new Index(locationColl),
      airbagCrmIndex: new Index(airbagCrmColl.map(use('valuesObj'))),
    };

    const result = extractOrderComments(airbagCrmColl, indexes);
    // const [first] = result;
    // expect(first).is.haveOwnProperty('uuid');
    expect(deepOmit(result, 'uuid')).is.deep.equal(deepOmit(assertion, 'uuid'));
  });
});
