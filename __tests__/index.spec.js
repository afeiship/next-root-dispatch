(function() {
  var nx = require('@feizheng/next-js-core2');
  var NxGmXhr = require('../src/next-gm-xhr');

  describe('NxGmXhr.methods', function() {
    test('init', function() {
      var data = {
        key: 1,
        value: 2
      };
      expect(!!data).toBe(true);
    });
  });
})();
