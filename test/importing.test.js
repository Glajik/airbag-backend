import omit from 'lodash/omit';
import { expect } from 'chai';
// import * as sinon from 'sinon';
// import { readFileSync } from 'fs';
import extractPhotos from '../src/importing/extractPartPhotos';
import extractParts from '../src/importing/extractParts';
import extractPartState from '../src/importing/extractPartState';
import plasticSample from './plasticSample';

// const content = readFileSync(plasticPath);
// const data = JSON.parse(content);
// expect(data).is.instanceof(Array);
const rmId = coll => coll.map(v => omit(v, 'uuid'));

describe('Test on prepared samples', () => {
  // const plasticPath = './test/datasource/Цех пластика.json';
  it('extractPhotos()', () => {
    const assertion = [{
      uuid: 'some-uuid',
      partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      type: 'before',
      url: 'https://drive.google.com/drive/folders/sendLinkToPhoto',
      comment: 'This is a sample of wheel',
      createdAt: new Date('2019-01-01T00:00:00.000Z'),
      person: { alias: 'User1' },
    }];
    const data = [plasticSample];
    const result = extractPhotos(data);
    const [first] = result;
    expect(first).is.haveOwnProperty('uuid');
    expect(rmId(result)).is.deep.equal(rmId(assertion));
  });

  it('extractParts()', () => {
    const assertion = [{
      uuid: 'f1558022-194e-48b9-9909-a7058810ce35',
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

  it('extractPartState()', () => {
    const assertion = [{
      uuid: 'some-uuid',
      partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      name: 'SEND',
      label: { statusName: 'SEND' },
      location: { personAlias: 'User1' },
      person: { personAlias: 'User1' },
      changedAt: new Date('2019-01-01T00:00:00.000Z'),
    }];

    const data = [plasticSample];
    const result = extractPartState(data);
    const [first] = result;
    expect(first).is.haveOwnProperty('uuid');
    expect(rmId(result)).is.deep.equal(rmId(assertion));
  });
});

// const acceptance = {
//   uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
//   name: 'acceptance1',
//   label: 'Приемка Экстрим',
// };

// const production = {
//   uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
//   name: 'acceptance1',
//   label: 'Приемка Экстрим',
// };

// const locations = [acceptance, production];

// const persons = [{
//   uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
//   name: 'User',
//   account: 'user@gmail.com',
//   alias: 'User1',
//   locationLabel: 'Приемка Экстрим',
// }];

// const statuses = [{
//   uuid: '923a4b6e-732c-4739-abcb-12fc64bf179c',
//   locationLabel: 'Приемка Экстрим',
//   name: 'sentToPlastic',
//   label: 'Отправил в цех Пластика',
// }];
