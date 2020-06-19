import { Facade } from './facade';

describe('app-facade', () => {
  it('builds', () => {
    expect(new Facade()).toBeTruthy();
  });
});
