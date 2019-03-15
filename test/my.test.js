import * as testm from '../src/main';

describe('Test', () => {
  console.log(testm.default);

  it('should succeed', (done) => {
    setTimeout(done, 1000);
  });

  it('should fail', () => {
    setTimeout(() => {
      throw new Error('Failed');
    }, 1000);
  });

  it('should randomly fail', () => {
    // if (require('./module')) { // eslint-disable-line
    // throw new Error('Randomly failed');
    // }
  });
});
