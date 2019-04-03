import omit from 'lodash/omit';
import { expect } from 'chai';
// import * as sinon from 'sinon';
// import { readFileSync } from 'fs';
import extractPhotos from '../src/importing/extractPartPhotos';
import extractParts from '../src/importing/extractParts';
import plasticSample from './plasticSample';

// const content = readFileSync(plasticPath);
// const data = JSON.parse(content);
// expect(data).is.instanceof(Array);

describe('Test on prepared samples', () => {
  // const plasticPath = './test/datasource/Цех пластика.json';
  it('extractPhotos()', () => {
    const assertion = [{
      partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      type: 'before',
      url: 'https://drive.google.com/drive/folders/sendLinkToPhoto',
      comment: 'This is a sample of wheel',
      createdAt: new Date('2019-01-01T00:00:00.000Z'),
      person: { name: 'User1' },
    }];
    const data = [plasticSample];
    const result = extractPhotos(data);
    const [first] = result;
    expect(first).is.haveOwnProperty('uuid');
    expect(first).is.haveOwnProperty('partUuid');
    const withoutUuid = result.map(v => omit(v, 'uuid'));
    expect(withoutUuid).is.deep.equal(assertion);
  });

  it('extractParts()', () => {
    const assertion = [{
      uuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      label: 'Руль',
      orderId: 1234,
      model: 'Tesla',
      color: 'Бежевый',
    }];
    const data = [plasticSample];
    const result = extractParts(data);
    const [first] = result;
    expect(first).is.haveOwnProperty('uuid');
    expect(result).is.deep.equal(assertion);
  });
});
