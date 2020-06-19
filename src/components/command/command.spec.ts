import { Command } from './command';

describe('app-command', () => {
  it('builds', () => {
    expect(new Command()).toBeTruthy();
  });
});
