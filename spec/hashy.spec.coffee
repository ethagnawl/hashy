describe 'hashy', ->
    beforeEach -> window.location.hash = ''
    afterEach -> window.location.hash = ''

    it 'creates a new hash containing a single k,v pair', ->
        hashy('key', 'value')
        result = window.location.hash
        expect(result).toEqual('#key=value')

    it 'updates an existing k,v pair in the hash', ->
        hashy('key', 'value')
        hashy('key', 'upated_value')
        result = window.location.hash
        expect(result).toEqual('#key=upated_value')

    it 'adds a k,v pair to an existing hash', ->
        hashy('key', 'value')
        hashy('key_1', 'value')
        result = window.location.hash
        expect(result).toEqual('#key=value&key_1=value')

    it 'updates an existing k,v pair within a hash containing multiple k,v pairs', ->
        hashy(['some', 'pair'], ['key', 'value'], ['test', 'cool'])
        hashy('key', 'upated_value')
        result = window.location.hash
        expect(result).toEqual('#some=pair&key=upated_value&test=cool')

    it 'creates a new hash containing multiple k,v pairs', ->
        hashy(['some', 'pair'], ['key', 'value'], ['test', 'cool'])
        result = window.location.hash
        expect(result).toEqual('#some=pair&key=value&test=cool')
