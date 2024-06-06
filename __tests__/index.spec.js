require('../src');

describe('api.basic test', () => {
  test('nx.rootDispatch exist', function () {
    expect(typeof nx.rootDispatch).toBe('function');
  });
});
