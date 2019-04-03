import omit from 'lodash/omit';
// import getUuid from 'uuid/v4';
import { expect } from 'chai';
// import * as sinon from 'sinon';
// import { readFileSync } from 'fs';
import extractPhotos from '../src/importing/extractPartPhotos';
import plasticSample from './plasticSample';

describe('Test', () => {
  // const plasticPath = './test/datasource/Цех пластика.json';
  it('test extractPhotos()', () => {
    const photosAssertion = [{
      partUuid: 'f1558022-194e-48b9-9909-a7058810ce35',
      url: 'https://drive.google.com/drive/folders/sendLinkToPhoto',
      comment: 'This is a sample of wheel',
      createdAt: new Date('2019-01-01T00:00:00.000Z'),
      person: { name: 'User1' },
    }];
    // const content = readFileSync(plasticPath);
    // const data = JSON.parse(content);
    // expect(data).is.instanceof(Array);
    const data = [plasticSample];
    const result = extractPhotos(data);
    const [first] = result;
    expect(first).is.haveOwnProperty('uuid');
    const withoutUuid = result.map(v => omit(v, 'uuid'));
    expect(withoutUuid).is.deep.equal(photosAssertion);
  });
});
