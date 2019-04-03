/* eslint-disable no-unused-expressions */
import Kava from '@glajik/kava';
import { expect } from 'chai';
import { doImport } from '../ImportingApp';
import {
  // eslint-disable-next-line no-unused-vars
  Parts, States, History, Photos, Comments,
} from '../db/db';

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
    const queryResult = Parts.dataColl.filter(o => o.orderId === orderId);
    expect(queryResult).is.length.is.equal(2);
    const [first] = queryResult;

    // used in next tests
    partUuid = first.uuid;

    const { rowId, state } = first;
    expect(rowId).at.least(400);
    expect(rowId).at.most(1000);

    // check it
    expect(state).is.equal({
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
        changedAt: new Date('2019-03-01 11:50:23'),
        uuid: 'e440dec4-2f12-466a-abbe-1a54a65b81af',
        name: 'acceptedFormProduction',
        label: 'Получил из производства',
        location: {
          uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
          name: 'acceptance1',
          label: 'Приемка Экстрим',
          localState: {},
        },
        person: {
          uuid: '6920e3c5-9e30-4d17-a2d7-158ccd0ea214',
          account: 'andrewautocrash@gmail.com',
          name: 'Андрей Журжа',
          locationLabel: 'Приемка Экстрим',
        },

      },
      comments: [],
    });
  });

  test.make('States. Check entries.', () => {
    // search part in db
    const queryResult = States.dataColl
      .filter(o => o.partUuid === partUuid);

    expect(queryResult).is.length.is.equal(4);

    const [acceptanceFirst, plasticFirst, plasticLast, acceptanceLast] = queryResult;

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
      name: 'sentToProduction',
      label: 'Отправил в производство',
      location: location1,
      person: person1,
    });

    expect(acceptanceLast.state).is.deep.equal({
      uuid: acceptanceLast.state.uuid,
      partUuid,
      changedAt: new Date('2019-03-01 11:50:23'),
      name: 'acceptedFormProduction',
      label: 'Получил из производства',
      location: location1,
      person: person1,
    });

    expect(plasticFirst.state).is.deep.equal({
      uuid: plasticFirst.state.uuid,
      partUuid,
      changedAt: new Date('2019-02-15 11:14:33'),
      name: 'accepted',
      label: 'Принял в производстве',
      location: location2,
      person: person2,
    });

    expect(plasticLast.state).is.deep.equal({
      uuid: plasticLast.state.uuid,
      partUuid,
      changedAt: new Date('2019-02-28 14:09:19'),
      name: 'issued',
      label: 'Выдано производством',
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
