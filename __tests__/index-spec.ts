import * as index from '../src/index';

test('Should have eigen available', () => {
  expect(index.eigen).toBeTruthy();
});
