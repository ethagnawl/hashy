var any, is_array, key_hash_test, map;
any = function(items, operation) {
  var item, result, _i, _len;
  result = false;
  for (_i = 0, _len = items.length; _i < _len; _i++) {
    item = items[_i];
    if ((operation(item)) === true) {
      result = true;
      break;
    }
  }
  return result === true;
};
is_array = function(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
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
key_hash_test = function(value, key) {
  return value.indexOf(key) !== -1;
};