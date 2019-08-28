import store from '../src/store/configureStore';

describe('Test REDUX STORE', () => {
  it('test redux store', () => {
    expect(store).toMatchSnapshot();
  });
});
