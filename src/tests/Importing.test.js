/* eslint-disable no-unused-expressions */
import { omit } from 'lodash/omit';
import Kava from '@glajik/kava';
import { expect } from 'chai';
import { doImport } from '../ImportingApp';
import { parts, states } from '../db';

const test = new Kava('Importing integration test');

// eslint-disable-next-line import/prefer-default-export
export const doTests = () => {
  let partUuid;

  // check for this orderId
  const orderId = 3917;

  test.make('test Import', () => {
    doImport();
  });

  test.make('Parts. First entry should be equal to assertion', () => {
    // search part in db
    const queryResult = parts.dataColl.filter(o => o.orderId === orderId);
    expect(queryResult).is.length.is.equal(2);
    const [first] = queryResult;

    // used in next tests
    partUuid = first.uuid;

    const { rowId, state: data } = first;
    expect(rowId).at.least(400);
    expect(rowId).at.most(1000);

    // remove uuid from state
    omit(data.state, 'uuid');

    // check it
    expect(data).is.equal({
      orderId,
      model: 'БМВ',
      color: '',
      partType: {
        uuid: '8d4f5154-4900-4163-8974-f307d1397420',
        class: 'wheel',
        name: 'wheel',
        label: 'Руль',
      },
      state: {
        // uuid: 'some-uuid',
        status: {
          uuid: 'e092bb2f-f02d-4776-81cc-9cecaf6fdb30',
          name: 'ACCEPTED',
          label: 'Принял',
        },
        person: {
          uuid: '6920e3c5-9e30-4d17-a2d7-158ccd0ea214',
          account: 'andrewautocrash@gmail.com',
          name: 'Андрей Журжа',
          locationLabel: 'Приемка Экстрим',
        },
        location: {
          uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
          name: 'acceptance1',
          label: 'Приемка Экстрим',
        },
        changedAt: new Date('2019-03-01 11:50:23'),
      },
    });
  });

  test.make('States. Check entries.', () => {
    // search part in db
    const queryResult = states.dataColl
      .filter(o => o.partUuid === partUuid);

    expect(queryResult).is.length.is.equal(5);

    const [acceptanceFirst, plasticFirst, plasticMid, plasticLast, acceptanceLast] = queryResult;

    const person1 = {
      uuid: '6920e3c5-9e30-4d17-a2d7-158ccd0ea214',
      account: 'andrewautocrash@gmail.com',
      name: 'Андрей Журжа',
      from: 'Приемка Экстрим',
    };

    const location1 = {
      uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
      name: 'acceptance1',
      label: 'Приемка Экстрим',
    };

    const person2 = {
      uuid: '7238ddaf-4819-4798-9d2f-c581489c8e95',
      account: 'andrey.autocrash@gmail.com',
      name: 'Андрей старший',
      from: 'Пластик',
    };

    const location2 = {
      uuid: 'd851eb34-4cb7-4956-838b-ae82118d8c50',
      name: 'plastic',
      label: 'Пластик',
    };

    // check it
    expect(acceptanceFirst.state).is.deep.equal({
      uuid: acceptanceFirst.state.uuid,
      partUuid,
      changedAt: new Date('2019-02-14 17:07:27'),
      status: {
        uuid: '885ba19e-46ef-4cf2-9190-448011abc493',
        name: 'SENT',
        label: 'Отправил',
      },
      location: location1,
      person: person1,
    });

    expect(acceptanceLast.state).is.deep.equal({
      uuid: acceptanceLast.state.uuid,
      partUuid,
      changedAt: new Date('2019-03-01 11:50:23'),
      status: {
        uuid: 'eacf295e-3cf8-4584-a9d9-b34b2b3c1477',
        name: 'ACCEPTED',
        label: 'Принял',
      },
      location: location1,
      person: person1,
    });

    expect(plasticFirst.state).is.deep.equal({
      uuid: plasticFirst.state.uuid,
      partUuid,
      changedAt: new Date('2019-02-15 11:14:33'),
      status: {
        uuid: 'e092bb2f-f02d-4776-81cc-9cecaf6fdb30',
        name: 'ACCEPTED',
        label: 'Принял',
      },
      location: location2,
      person: person2,
    });

    expect(plasticMid.state).is.deep.equal({
      uuid: plasticMid.state.uuid,
      partUuid,
      changedAt: new Date('2019-02-28 14:09:19'),
      status: {
        uuid: '5a2a9fda-82a2-405c-a3e7-14961c6d0a5a',
        name: 'READY',
        label: 'К отгрузке',
      },
      location: location2,
      person: person2,
    });

    expect(plasticLast.state).is.deep.equal({
      uuid: plasticLast.state.uuid,
      partUuid,
      changedAt: new Date('2019-03-01 11:50:23'),
      status: {
        uuid: 'e440dec4-2f12-466a-abbe-1a54a65b81af',
        name: 'ISSUED',
        label: 'Выпустил',
      },
      location: location2,
      person: person2,
    });
  });

  return test;
};

// export const doTests = () => {
//   test.make('Try to test it', () => {
//     test.isEqual(true, true);
//   });

//   test.make('Chai test', () => {
//     expect([1, 2, 3]).is.deep.equal([1, 2, 3]);
//   });

//   test.make('Should not pass', () => {
//     test.isEqual(true, false);
//   });
//   return test;
// };
