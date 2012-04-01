(function() {
  describe('hashy', function() {
    beforeEach(function() {
      return window.location.hash = '';
    });
    afterEach(function() {
      return window.location.hash = '';
    });
    it('creates a new hash containing a single k,v pair', function() {
      var result;
      hashy('key', 'value');
      result = window.location.hash;
      return expect(result).toEqual('#key=value');
    });
    it('updates an existing k,v pair in the hash', function() {
      var result;
      hashy('key', 'value');
      hashy('key', 'upated_value');
      result = window.location.hash;
      return expect(result).toEqual('#key=upated_value');
    });
    it('adds a k,v pair to an existing hash', function() {
      var result;
      hashy('key', 'value');
      hashy('key_1', 'value');
      result = window.location.hash;
      return expect(result).toEqual('#key=value&key_1=value');
    });
    it('updates an existing k,v pair within a hash containing multiple k,v pairs', function() {
      var result;
      hashy(['some', 'pair'], ['key', 'value'], ['test', 'cool']);
      hashy('key', 'upated_value');
      result = window.location.hash;
      return expect(result).toEqual('#some=pair&key=upated_value&test=cool');
    });
    return it('creates a new hash containing multiple k,v pairs', function() {
      var result;
      hashy(['some', 'pair'], ['key', 'value'], ['test', 'cool']);
      result = window.location.hash;
      return expect(result).toEqual('#some=pair&key=value&test=cool');
    });
  });
}).call(this);
