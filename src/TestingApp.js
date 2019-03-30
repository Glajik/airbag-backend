import * as importingTest from './tests/Importing.test';

const tests = [
  importingTest,
];

// eslint-disable-next-line import/prefer-default-export
export const doAllTests = () => {
  const results = tests.map(test => test.doTests());

  const output = results.map(r => r.output).join('\n');

  const errors = results.map(r => r.errCount)
    .reduce((acc, errCount) => (errCount > 0 ? acc + 1 : acc), 0);

  const total = tests.length;

  return [
    '',
    output,
    '===================================',
    `${errors === 0 ? 'PASSED' : 'NOT PASSED'} - Tested modules: ${total}, not passed: ${errors}`,
  ].join('\n');
};
