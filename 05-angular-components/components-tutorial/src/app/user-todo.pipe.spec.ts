import { UserTodoPipe } from './user-todo.pipe';

describe('UserTodoPipe', () => {
  it('create an instance', () => {
    const pipe = new UserTodoPipe();
    expect(pipe).toBeTruthy();
  });
});
