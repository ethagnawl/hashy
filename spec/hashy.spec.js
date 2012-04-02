(function() {
  describe('hashy', function() {
    beforeEach(function() {
      return window.location.hash = '';
    });
    afterEach(function() {
      return window.location.hash = '';
    });
    it('gets the hash', function() {
      var result;
      window.location.hash = 'this_is_a_hash';
      result = hashy();
      return expect(result).toEqual('#this_is_a_hash');
    });
    it('sets the hash', function() {
      var result;
      hashy('this_is_a_hash');
      result = hashy();
      return expect(result).toEqual('#this_is_a_hash');
    });
    it('sets an empty hash with one k,v pair', function() {
      var result;
      hashy('key', 'value');
      result = hashy();
      return expect(result).toEqual('#key=value');
    });
    it('sets an empty hash with multiple k,v pairs', function() {
      var result;
      hashy(['some', 'pair'], ['key', 'value'], ['test', 'cool']);
      result = hashy();
      return expect(result).toEqual('#some=pair&key=value&test=cool');
    });
    it('updates an existing k,v pair in the hash', function() {
      var result;
      hashy('key', 'value');
      hashy('key', 'upated_value');
      result = hashy();
      return expect(result).toEqual('#key=upated_value');
    });
    it('adds a k,v pair to an existing hash', function() {
      var result;
      hashy('key', 'value');
      hashy('key_1', 'value');
      result = hashy();
      return expect(result).toEqual('#key=value&key_1=value');
    });
    it('updates an existing k,v pair within a hash containing multiple k,v pairs', function() {
      var result;
      hashy(['some', 'pair'], ['key', 'value'], ['test', 'cool']);
      hashy('key', 'upated_value');
      result = hashy();
      return expect(result).toEqual('#some=pair&key=upated_value&test=cool');
    });
    return it('creates a new hash containing multiple k,v pairs', function() {
      var result;
      hashy(['some', 'pair'], ['key', 'value'], ['test', 'cool']);
      result = hashy();
      return expect(result).toEqual('#some=pair&key=value&test=cool');
    });
  });
}).call(this);
