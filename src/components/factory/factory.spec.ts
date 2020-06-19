import { Factory } from './factory';

describe('app-factory', () => {
  it('builds', () => {
    expect(new Factory()).toBeTruthy();
  });
});
