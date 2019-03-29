import Kava from '@airbag/kava';
import { expect } from 'chai';

const test = new Kava('Importing integration test');

// eslint-disable-next-line import/prefer-default-export
export const doTests = () => {
  test.make('Try to test it', () => {
    test.isEqual(true, true);
  });

  test.make('Chai test', () => {
    expect([1, 2, 3]).is.deep.equal([1, 2, 3]);
  });

  test.make('Should not pass', () => {
    test.isEqual(true, false);
  });
  return test;
};
