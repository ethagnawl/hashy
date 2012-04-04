(function() {
  describe('utilities', function() {
    it('map', function() {
      var result;
      result = map([1, 2, 3], function(n) {
        return n * 2;
      });
      return expect(result).toEqual([2, 4, 6]);
    });
    it('any', function() {
      var result;
      result = any([1, 2, 3], function(n) {
        return n > 2;
      });
      return expect(result).toBeTruthy();
    });
    it('!any', function() {
      var result;
      result = any([1, 2, 3], function(n) {
        return n > 6;
      });
      return expect(result).toBeFalsy();
    });
    it('is_array', function() {
      var result;
      result = is_array([1, 2, 3]);
      return expect(result).toBeTruthy();
    });
    it('!is_array', function() {
      var result;
      result = is_array({});
      return expect(result).toBeFalsy();
    });
    it('key_hash_test', function() {
      var result;
      result = key_hash_test('1234', '2');
      return expect(result).toBeTruthy();
    });
    return it('!key_hash_test', function() {
      var result;
      result = key_hash_test('1234', '7');
      return expect(result).toBeFalsy();
    });
  });
}).call(this);
