describe 'hashy', ->
    beforeEach -> window.location.hash = ''
    afterEach -> window.location.hash = ''

    it 'gets the hash', ->
        window.location.hash = 'this_is_a_hash'
        result = hashy()
        expect(result).toEqual('#this_is_a_hash')

    it 'sets the hash', ->
        hashy('this_is_a_hash')
        result = hashy()
        expect(result).toEqual('#this_is_a_hash')

    it 'destroys the hash', ->
        hashy('key', 'value')
        hashy(false)
        result = hashy()
        expect(result).toEqual('')

    it 'sets an empty hash with one k,v pair', ->
        hashy('key', 'value')
        result = hashy()
        expect(result).toEqual('#key=value')

    it 'sets an empty hash with multiple k,v pairs', ->
        hashy(['some', 'pair'], ['key', 'value'], ['test', 'cool'])
        result = hashy()
        expect(result).toEqual('#some=pair&key=value&test=cool')

    it 'updates an existing k,v pair in the hash', ->
        hashy('key', 'value')
        hashy('key', 'upated_value')
        result = hashy()
        expect(result).toEqual('#key=upated_value')

    it 'adds a k,v pair to an existing hash', ->
        hashy('key', 'value')
        hashy('key_1', 'value')
        result = hashy()
        expect(result).toEqual('#key=value&key_1=value')

    it 'updates an existing k,v pair within a hash containing multiple k,v pairs', ->
        hashy(['some', 'pair'], ['key', 'value'], ['test', 'cool'])
        hashy('key', 'upated_value')
        result = hashy()
        expect(result).toEqual('#some=pair&key=upated_value&test=cool')

    it 'creates a new hash containing multiple k,v pairs', ->
        hashy(['some', 'pair'], ['key', 'value'], ['test', 'cool'])
        result = hashy()
        expect(result).toEqual('#some=pair&key=value&test=cool')

    it 'updates a hash containing multiple k,v pairs', ->
        hashy(['some', 'pair'], ['key', 'value'])
        hashy(['some', 'new_pair'], ['key', 'new_value'])
        result = hashy()
        expect(result).toEqual('#some=new_pair&key=new_value')

    it 'appends multiple k,v pairs', ->
        hashy('key', 'value')
        hashy(['key_1', 'value_1'], ['key_2', 'value_2'])
        console.log result = hashy()
        expect(result).toEqual('#key=value&key_1=value_1&key_2=value_2')

