any = (items, operation) ->
    result = false
    for item in items
        if (operation item) is true
            result = true
            break
    result is true

is_array = (obj) ->
    Object.prototype.toString.call(obj) is '[object Array]'

map = (items, operation) ->
    array = []
    for item in items
        array.push operation item
    array

key_hash_test = (value, key) ->
    value.indexOf(key) isnt -1
