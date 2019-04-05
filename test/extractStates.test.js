import { expect } from 'chai';
import deepOmit from 'omit-deep-lodash';
import Index from '../src/importing/Index';
import extractStates from '../src/importing/extractStates';

describe('Importing part states', () => {
  const locationColl = [
    {
      uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
      name: 'acceptance1',
      label: 'Приемка Экстрим',
    },
    {
      uuid: 'd851eb34-4cb7-4956-838b-ae82118d8c50',
      name: 'plastic',
      label: 'Пластик',
    },
  ];

  const personColl = [
    {
      uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
      name: 'UserAcceptance',
      account: 'user_a@gmail.com',
      acceptanceAlias: 'UserAcceptanceAlias',
      locationLabel: 'Приемка Экстрим',
    },
    {
      uuid: '6920e3c5-9e30-4d17-a2d7-158ccd0ea214',
      name: 'UserPlastic',
      account: 'user_p@gmail.com',
      acceptanceAlias: 'UserPlasticAlias',
      locationLabel: 'Пластик',
    },
  ];

  const statusColl = [
    {
      uuid: '885ba19e-46ef-4cf2-9190-448011abc493',
      locationLabel: 'Приемка Экстрим',
      name: 'SENT',
      label: 'Отправил',
    },
    {
      uuid: 'e092bb2f-f02d-4776-81cc-9cecaf6fdb30',
      locationLabel: 'Пластик',
      name: 'ACCEPTED',
      label: 'Принял',
    },
    {
      uuid: '5a2a9fda-82a2-405c-a3e7-14961c6d0a5a',
      locationLabel: 'Пластик',
      name: 'READY',
      label: 'К отгрузке',
    },
    {
      uuid: 'e440dec4-2f12-466a-abbe-1a54a65b81af',
      locationLabel: 'Пластик',
      name: 'ISSUED',
      label: 'Выпустил',
    },
    {
      uuid: 'eacf295e-3cf8-4584-a9d9-b34b2b3c1477',
      locationLabel: 'Приемка Экстрим',
      name: 'ACCEPTED',
      label: 'Принял',
    },

  ];

  const indexes = {
    personIndex: new Index(personColl),
    locationIndex: new Index(locationColl),
    statusIndex: new Index(statusColl),
  };

  it('Should make plain object as in assertion from plasticSample', () => {
    const acceptanceDataColl = [{
      uuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      valuesObj: {
        issueDate: new Date('2019-01-02T00:00:00.000Z'),
        sentToProductionStatus: 'Отправлен',
        sentToProductionDate: new Date('2019-01-01T00:00:00.000Z'),
      },
      notesObj: {
        sentToProductionDate: 'Отправил:\nUserAcceptanceAlias',
      },
    }];

    const assertion = [{
      uuid: 'some-uuid',
      partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      status: {
        uuid: '885ba19e-46ef-4cf2-9190-448011abc493',
        name: 'SENT',
        label: 'Отправил',
      },
      location: {
        uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
        name: 'acceptance1',
        label: 'Приемка Экстрим',
      },
      person: {
        uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
        name: 'UserAcceptance',
        account: 'user_a@gmail.com',
        locationLabel: 'Приемка Экстрим',
      },
      changedAt: new Date('2019-01-01T00:00:00.000Z'),
    }];

    const result = extractStates(acceptanceDataColl, indexes);
    expect(deepOmit(result, 'uuid')).is.deep.equal(deepOmit(assertion, 'uuid'));
  });

  it('Should append all five states', () => {
    const acceptanceDataColl = [{
      uuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      valuesObj: {
        issueDate: new Date('2019-01-02T00:00:00.000Z'),
        sentToProductionStatus: 'Отправлен',
        sentToProductionDate: new Date('2019-01-01T00:00:00.000Z'),
        acceptedStatus: 'Принял',
        acceptedDate: new Date('2019-01-02T00:00:00.000Z'),
        readyStatus: 'Готов',
        readyDate: new Date('2019-01-03T00:00:00.000Z'),
        returnStatus: 'Отправлен',
        returnDate: new Date('2019-01-04T00:00:00.000Z'),
      },
      notesObj: {
        sentToProductionDate: 'Отправил:\nUserAcceptanceAlias',
        acceptedDate: 'Принял цех:\nUserPlasticAlias',
        readyDate: 'Подготовил к отправке:\nUserPlasticAlias',
        returnDate: 'Отправил:\nUserAcceptanceAlias',
      },
    }];

    const assertion = [
      {
        uuid: 'some-uuid',
        partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
        status: {
          uuid: '885ba19e-46ef-4cf2-9190-448011abc493',
          name: 'SENT',
          label: 'Отправил',
        },
        location: {
          uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
          name: 'acceptance1',
          label: 'Приемка Экстрим',
        },
        person: {
          uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
          name: 'UserAcceptance',
          account: 'user_a@gmail.com',
          locationLabel: 'Приемка Экстрим',
        },
        changedAt: new Date('2019-01-01T00:00:00.000Z'),
      },
      {
        uuid: 'some-uuid',
        partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
        status: {
          uuid: 'e092bb2f-f02d-4776-81cc-9cecaf6fdb30',
          name: 'ACCEPTED',
          label: 'Принял',
        },
        location: {
          uuid: 'd851eb34-4cb7-4956-838b-ae82118d8c50',
          name: 'plastic',
          label: 'Пластик',
        },
        person: {
          uuid: '6920e3c5-9e30-4d17-a2d7-158ccd0ea214',
          name: 'UserPlastic',
          account: 'user_p@gmail.com',
          locationLabel: 'Пластик',
        },
        changedAt: new Date('2019-01-02T00:00:00.000Z'),
      },
      {
        uuid: 'some-uuid',
        partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
        status: {
          uuid: '5a2a9fda-82a2-405c-a3e7-14961c6d0a5a',
          name: 'READY',
          label: 'К отгрузке',
        },
        location: {
          uuid: 'd851eb34-4cb7-4956-838b-ae82118d8c50',
          name: 'plastic',
          label: 'Пластик',
        },
        person: {
          uuid: '6920e3c5-9e30-4d17-a2d7-158ccd0ea214',
          name: 'UserPlastic',
          account: 'user_p@gmail.com',
          locationLabel: 'Пластик',
        },
        changedAt: new Date('2019-01-03T00:00:00.000Z'),
      },
      {
        uuid: 'some-uuid',
        partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
        status: {
          uuid: 'e440dec4-2f12-466a-abbe-1a54a65b81af',
          name: 'ISSUED',
          label: 'Выпустил',
        },
        location: {
          uuid: 'd851eb34-4cb7-4956-838b-ae82118d8c50',
          name: 'plastic',
          label: 'Пластик',
        },
        person: {
          uuid: '6920e3c5-9e30-4d17-a2d7-158ccd0ea214',
          name: 'UserPlastic',
          account: 'user_p@gmail.com',
          locationLabel: 'Пластик',
        },
        changedAt: new Date('2019-01-04T00:00:00.000Z'),
      },
      {
        uuid: 'some-uuid',
        partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
        status: {
          uuid: 'eacf295e-3cf8-4584-a9d9-b34b2b3c1477',
          name: 'ACCEPTED',
          label: 'Принял',
        },
        location: {
          uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
          name: 'acceptance1',
          label: 'Приемка Экстрим',
        },
        person: {
          uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
          name: 'UserAcceptance',
          account: 'user_a@gmail.com',
          locationLabel: 'Приемка Экстрим',
        },
        changedAt: new Date('2019-01-04T00:00:00.000Z'),
      },
    ];

    const result = extractStates(acceptanceDataColl, indexes);
    expect(deepOmit(result, 'uuid')).is.deep.equal(deepOmit(assertion, 'uuid'));
  });
});
