import omit from 'lodash/omit';
import { expect } from 'chai';
// import * as sinon from 'sinon';
// import { readFileSync } from 'fs';
import extractPhotos from '../src/importing/extractPhotos';
import extractParts from '../src/importing/extractParts';
import extractStates from '../src/importing/extractStates';
import plasticSample from './plasticSample';
import completeStates from '../src/importing/completeStates';
import Index from '../src/importing/Index';

// const content = readFileSync(plasticPath);
// const data = JSON.parse(content);
// expect(data).is.instanceof(Array);
const rmId = coll => coll.map(v => omit(v, 'uuid'));

describe('extract stage', () => {
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

  it('extractStates()', () => {
    const assertion = [{
      uuid: 'some-uuid',
      partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      status: { name: 'SEND' },
      location: {},
      person: { alias: 'User1' },
      changedAt: new Date('2019-01-01T00:00:00.000Z'),
    }];

    const data = [plasticSample];
    const result = extractStates(data);
    const [first] = result;
    expect(first).is.haveOwnProperty('uuid');
    expect(rmId(result)).is.deep.equal(rmId(assertion));
  });
});

describe('complete stage', () => {
  it('state structure', () => {
    const acceptance = {
      uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
      name: 'acceptance1',
      label: 'Приемка Экстрим',
    };

    const production = {
      uuid: 'd851eb34-4cb7-4956-838b-ae82118d8c50',
      name: 'plastic',
      label: 'Пластик',
    };

    const person = {
      uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
      name: 'User',
      account: 'user@gmail.com',
      alias: 'User1',
      locationLabel: 'Приемка Экстрим',
    };

    const locationColl = [acceptance, production];

    const personColl = [person];

    const sendStatus = {
      uuid: '885ba19e-46ef-4cf2-9190-448011abc493',
      locationLabel: 'Приемка Экстрим',
      name: 'SENT',
      label: 'Отправил',
    };

    const statusColl = [sendStatus];

    const indexes = {
      personIndex: new Index(personColl),
      locationIndex: new Index(locationColl),
      statusIndex: new Index(statusColl),
    };

    const source = [{
      uuid: 'some-uuid',
      partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      status: {
        name: 'SENT',
      },
      location: {},
      person: { alias: 'User1' },
      changedAt: new Date('2019-01-01T00:00:00.000Z'),
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
        name: 'User',
        account: 'user@gmail.com',
        locationLabel: 'Приемка Экстрим',
      },
      changedAt: new Date('2019-01-01T00:00:00.000Z'),
    }];

    const result = completeStates(source, indexes);
    expect(rmId(result)).is.deep.equal(rmId(assertion));
  });
});
