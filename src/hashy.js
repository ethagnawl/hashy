window.hashy = function(key, value) {
  var is_array, key_hash_test, key_is_in_existing_hash, map, new_hash, new_hash_array, old_hash, old_hash_array, pair, _hash, _i, _len, _results;
  is_array = function(obj) {
    return toString.call(obj) === '[object Array]';
  };
  map = function(items, operation) {
    var array, item, _i, _len;
    array = [];
    for (_i = 0, _len = items.length; _i < _len; _i++) {
      item = items[_i];
      array.push(operation(item));
    }
    return array;
  };
  if (arguments.length === 0) {
    return window.location.hash;
  } else if (arguments.length === 1 && !is_array(arguments[0])) {
    new_hash = arguments[0] === false ? '' : arguments[0];
    return window.location.hash = new_hash;
  } else {
    if (is_array(arguments[0])) {
      _results = [];
      for (_i = 0, _len = arguments.length; _i < _len; _i++) {
        pair = arguments[_i];
        _results.push((function(pair) {
          return hashy(pair[0], pair[1]);
        })(pair));
      }
      return _results;
    } else {
      _hash = hashy();
      old_hash = _hash && _hash.split('#')[1];
      new_hash = key + '=' + value;
      old_hash_array = old_hash.split('&');
      key_hash_test = function(value) {
        return value.indexOf(key) !== -1;
      };
      if (old_hash) {
        if (old_hash_array.length > 1) {
          key_is_in_existing_hash = _.any(old_hash_array, function(x) {
            return key_hash_test(x);
          });
          if (key_is_in_existing_hash) {
            new_hash_array = map(old_hash_array, function(item) {
              if (key_hash_test(item)) {
                item = new_hash;
              }
              return item;
            });
            new_hash = new_hash_array.join('&');
          } else {
            old_hash_array.push(new_hash);
            new_hash = old_hash_array.join('&');
          }
        } else if (key_hash_test(old_hash)) {
          false;
        } else {
          new_hash = old_hash + '&' + new_hash;
        }
      }
      return hashy(new_hash);
    }
  }
};