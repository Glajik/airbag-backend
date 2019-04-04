import omit from 'lodash/omit';
import { expect } from 'chai';
import extractPhotos from '../src/importing/extractPhotos';
import plasticSample from './plasticSample';
import Index from '../src/importing/Index';

// const content = readFileSync(plasticPath);
// const data = JSON.parse(content);
// expect(data).is.instanceof(Array);
const rmId = coll => coll.map(v => omit(v, 'uuid'));

describe('Importing photos', () => {
  it('Should make plain object with full filled { person } from plasticSample as in assertion', () => {
    const person = {
      uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
      name: 'User',
      account: 'user@gmail.com',
      alias: 'UsernameAlias',
      locationLabel: 'Приемка Экстрим',
    };

    const personColl = [person];

    const assertion = [{
      uuid: 'some-uuid',
      partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      type: 'before',
      url: 'https://drive.google.com/drive/folders/sendLinkToPhoto',
      comment: 'This is a sample of wheel',
      createdAt: new Date('2019-01-01T00:00:00.000Z'),
      person: {
        uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
        name: 'User',
        account: 'user@gmail.com',
        locationLabel: 'Приемка Экстрим',
      },
    }];

    const data = [plasticSample];
    const result = extractPhotos(data, { personIndex: new Index(personColl) });
    const [first] = result;
    expect(first).is.haveOwnProperty('uuid');
    expect(rmId(result)).is.deep.equal(rmId(assertion));
  });
});
