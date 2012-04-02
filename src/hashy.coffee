window.hashy = (key, value) ->
    if arguments.length is 0
        window.location.hash
    else if arguments.length is 1 and !_.isArray arguments[0]
        new_hash = if arguments[0] is false then '' else arguments[0]
        window.location.hash = new_hash
    else
        if _.isArray arguments[0]
            for pair in arguments
                do (pair) -> hashy pair[0], pair[1]
        else
            _hash = hashy()
            old_hash = _hash and _hash.split('#')[1]
            new_hash = key + '=' + value
            old_hash_array = old_hash.split('&')
            key_hash_test = (value) -> value.indexOf(key) isnt -1

            if old_hash
                if old_hash_array.length > 1
                    # existing hash with multiple '&' separated k,v pairs
                    key_is_in_existing_hash = _.any old_hash_array, (x) -> key_hash_test x

                    if key_is_in_existing_hash
                        new_hash_array = _.map old_hash_array, (x, i) ->
                            if key_hash_test x
                              x = new_hash
                            x
                        new_hash = new_hash_array.join '&'
                    else
                        # order_item_count is not in existing hash k,v pairs
                        old_hash_array.push new_hash
                        new_hash = old_hash_array.join '&'
                else if key_hash_test old_hash
                    # existing hash is an instance of k,v pair
                    false
                else
                    # k,v pair is not in existing_hash
                    new_hash = old_hash + '&' + new_hash

            hashy new_hash
