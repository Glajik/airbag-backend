import { expect } from 'chai';
import Index from '../src/importing/Index';
import completePersons from '../src/importing/completePersons';
import completeStatuses from '../src/importing/completeStatuses';
import completeLocations from '../src/importing/completeLocations';
import completePartTypes from '../src/importing/completePartTypes';

describe('Testing micro modules', () => {
  it('completePersons', () => {
    const personColl = [{
      uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
      name: 'User',
      account: 'user@gmail.com',
      acceptanceAlias: 'UsernameAlias',
      locationLabel: 'Приемка Экстрим',
    }];

    const indexes = {
      personIndex: new Index(personColl),
    };

    const data = [{
      person: { acceptanceAlias: 'UsernameAlias' },
    }];

    const assertion = [{
      person: {
        uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
        name: 'User',
        account: 'user@gmail.com',
        locationLabel: 'Приемка Экстрим',
      },
    }];

    const result = completePersons(data, indexes);
    expect(result).is.deep.equal(assertion);
  });

  it('completeStatuses', () => {
    const statusColl = [{
      uuid: '885ba19e-46ef-4cf2-9190-448011abc493',
      locationLabel: 'Приемка Экстрим',
      name: 'SENT',
      label: 'Отправил',
    }];

    const indexes = {
      statusIndex: new Index(statusColl),
    };

    const data = [{
      status: {
        name: 'SENT',
      },
    }];

    const assertion = [{
      status: {
        uuid: '885ba19e-46ef-4cf2-9190-448011abc493',
        name: 'SENT',
        label: 'Отправил',
      },
    }];

    const result = completeStatuses(data, indexes);
    expect(result).is.deep.equal(assertion);
  });

  it('completeLocations', () => {
    const locationColl = [{
      uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
      name: 'acceptance1',
      label: 'Приемка Экстрим',
    }];

    const indexes = {
      locationIndex: new Index(locationColl),
    };

    const data = [{
      location: {
        label: 'Приемка Экстрим',
      },
    }];

    const assertion = [{
      location: {
        uuid: '909f0cf8-0492-48b2-9c02-b10737edb080',
        name: 'acceptance1',
        label: 'Приемка Экстрим',
      },
    }];

    const result = completeLocations(data, indexes);
    expect(result).is.deep.equal(assertion);
  });

  it('completePartType', () => {
    const data = [{
      partType: { acceptanceAlias: 'Руль' },
    }];

    const partTypeColl = [{
      uuid: '8d4f5154-4900-4163-8974-f307d1397420',
      class: 'wheel',
      name: 'wheel',
      label: 'Руль стандарт',
      acceptanceAlias: 'Руль',
      airbagField: 'wheel_coverRef',
    }];

    const indexes = {
      partTypeIndex: new Index(partTypeColl),
    };

    const assertion = [{
      label: 'Руль стандарт',
      partType: {
        uuid: '8d4f5154-4900-4163-8974-f307d1397420',
        class: 'wheel',
        name: 'wheel',
        label: 'Руль стандарт',
      },
    }];

    const result = completePartTypes(data, indexes);
    expect(result).is.deep.equal(assertion);
  });
});
