import { expect } from 'chai';
import Kava from '../node_modules/@airbag/kava/dist/kava';
// import * as sinon from 'sinon';
import main from '../src/main';

const kava = new Kava();

describe('Test', () => {
  it('should succeed', () => {
    expect(main()).is.equal(true);
  });
  it('should succeed', () => {
    const result = kava.isEqual(1, 1);
    expect(result).is.true; // eslint-disable-line
  });
  it('should throw exception', (done) => {
    try {
      kava.isEqual(2, 'e');
      done('wrong');
    } catch (error) {
      expect(error).instanceOf(Error);
      done();
    }
  });
});
