import deepOmit from 'omit-deep-lodash';
import { expect } from 'chai';
import Index from '../src/importing/Index';
import extractStates from '../src/importing/extractStates';
import extractParts from '../src/importing/extractParts';

describe('Importing parts', () => {
  it('Should make plain object from plasticSample as in assertion', () => {
    const partTypeColl = [{
      uuid: '8d4f5154-4900-4163-8974-f307d1397420',
      class: 'wheel',
      name: 'wheel',
      label: 'Руль стандарт',
      acceptanceAlias: 'Руль',
      airbagField: 'wheel_coverRef',
    }];

    const locationColl = [{
      uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
      name: 'acceptance1',
      label: 'Приемка Экстрим',
    }];

    const personColl = [{
      uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
      name: 'User',
      account: 'user@gmail.com',
      acceptanceAlias: 'UsernameAlias',
      locationLabel: 'Приемка Экстрим',
    }];

    const statusColl = [{
      uuid: '885ba19e-46ef-4cf2-9190-448011abc493',
      locationLabel: 'Приемка Экстрим',
      name: 'SENT',
      label: 'Отправил',
    }];

    const airbagCrmColl = [{
      uuid: 'order-uuid',
      valuesObj: {
        id: 1234,
        start: new Date('2018-12-31T00:00:00.000Z'),
      },
    }];

    const acceptanceDataColl = [{
      uuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      valuesObj: {
        orderId: 1234,
        partName: 'Руль',
        model: 'Tesla',
        color: 'Бежевый',
        sentToProductionStatus: 'Отправлен',
        sentToProductionDate: new Date('2019-01-01T00:00:00.000Z'),
      },
      notesObj: {
        sentToProductionDate: 'Отправил:\nUsernameAlias',
      },
    }];

    const indexes = {
      personIndex: new Index(personColl),
      locationIndex: new Index(locationColl),
      statusIndex: new Index(statusColl),
    };

    const stateColl = extractStates(acceptanceDataColl, indexes);

    const use = prop => ({ uuid, [prop]: data }) => ({ uuid, ...data });

    const newIndexes = {
      ...indexes,
      stateIndex: new Index(stateColl),
      partTypeIndex: new Index(partTypeColl),
      airbagCrmIndex: new Index(airbagCrmColl.map(use('valuesObj'))),
    };

    const assertion = [{
      // uuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      appendedAt: new Date('2018-12-31T00:00:00.000Z'),
      orderId: 1234,
      model: 'Tesla',
      color: 'Бежевый',
      label: 'Руль стандарт',
      partType: {
        // uuid: '8d4f5154-4900-4163-8974-f307d1397420',
        class: 'wheel',
        name: 'wheel',
        label: 'Руль стандарт',
      },
      state: {
        // uuid: 'some-uuid',
        status: {
          // uuid: '885ba19e-46ef-4cf2-9190-448011abc493',
          name: 'SENT',
          label: 'Отправил',
        },
        location: {
          // uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
          name: 'acceptance1',
          label: 'Приемка Экстрим',
        },
        person: {
          // uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
          name: 'User',
          account: 'user@gmail.com',
          locationLabel: 'Приемка Экстрим',
        },
        changedAt: new Date('2019-01-01T00:00:00.000Z'),
      },
    }];

    const result = extractParts(acceptanceDataColl, newIndexes);
    expect(deepOmit(result, 'uuid')).is.deep.equal(assertion);
  });
});
