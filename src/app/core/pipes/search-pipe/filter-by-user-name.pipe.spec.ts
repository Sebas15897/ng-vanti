import { FilterByUserNamePipe } from './filter-by-user-name.pipe';

describe('FilterByUserNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterByUserNamePipe();
    expect(pipe).toBeTruthy();
  });
});
