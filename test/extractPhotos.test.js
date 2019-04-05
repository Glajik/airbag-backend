import deepOmit from 'omit-deep-lodash';
import { expect } from 'chai';
import extractPhotos from '../src/importing/extractPhotos';
import Index from '../src/importing/Index';

// const content = readFileSync(plasticPath);
// const data = JSON.parse(content);
// expect(data).is.instanceof(Array);

describe('Importing photos', () => {
  it('Should make plain object with full filled { person } from plasticSample as in assertion', () => {
    const personColl = [{
      uuid: 'b10b0acd-c7e4-4d82-8b88-6e2c5febcd1e',
      name: 'User',
      account: 'user@gmail.com',
      acceptanceAlias: 'UsernameAlias',
      locationLabel: 'Приемка Экстрим',
    }];

    const acceptanceDataColl = [{
      uuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      valuesObj: {
        sentToProductionStatus: 'Отправлен',
        sentToProductionDate: new Date('2019-01-01T00:00:00.000Z'),
      },
      formulasObj: {
        sendLinkToPhoto: '=ГИПЕРССЫЛКА("https://drive.google.com/drive/folders/sendLinkToPhoto";"Фото")',
      },
      notesObj: {
        sendLinkToPhoto: 'This is a sample of wheel',
        sentToProductionDate: 'Отправил:\nUsernameAlias',
      },
    }];

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

    const result = extractPhotos(acceptanceDataColl, { personIndex: new Index(personColl) });
    expect(deepOmit(result, 'uuid')).is.deep.equal(deepOmit(assertion, 'uuid'));
  });
});
