import omit from 'lodash/omit';
import { expect } from 'chai';
import Index from '../src/importing/Index';
import extractStates from '../src/importing/extractStates';
import plasticSample from './plasticSample';

const rmId = coll => coll.map(v => omit(v, 'uuid'));

describe('Importing part states', () => {
  it('Should make plain object as in assertion from plasticSample', () => {
    const acceptance = {
      uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
      name: 'acceptance1',
      label: 'Приемка Экстрим',
    };

    const person = {
      uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
      name: 'User',
      account: 'user@gmail.com',
      alias: 'UsernameAlias',
      locationLabel: 'Приемка Экстрим',
    };

    const locationColl = [acceptance];

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

    const data = [plasticSample];
    const result = extractStates(data, indexes);
    const [first] = result;
    expect(first).is.haveOwnProperty('uuid');
    expect(rmId(result)).is.deep.equal(rmId(assertion));
  });
});
