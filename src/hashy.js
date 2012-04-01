window.hashy = function(key, value) {
  var key_hash_test, key_is_in_existing_hash, new_hash, new_hash_array, old_hash, old_hash_array;
  if (_.isArray(arguments[0])) {
    return _.each(arguments, function(pair) {
      return hashy(pair[0], pair[1]);
    });
  } else {
    old_hash = window.location.hash && window.location.hash.split('#')[1];
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
          new_hash_array = _.map(old_hash_array, function(x, i) {
            if (key_hash_test(x)) {
              x = new_hash;
            }
            return x;
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
    return window.location.hash = new_hash;
  }
};