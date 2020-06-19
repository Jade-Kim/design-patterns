import { Singleton } from './singleton';

describe('app-singleton', () => {
  it('builds', () => {
    expect(new Singleton()).toBeTruthy();
  });
});
