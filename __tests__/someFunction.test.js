
// someFunction.test.js
const { validateURL } = require('../src/client/js/nameChecker.js');

test('Valid URL should return true', () => {
  expect(validateURL('https://www.example.com')).toBe(true);
});

test('Invalid URL should return false', () => {
  expect(validateURL('invalid-url')).toBe(false);
});
