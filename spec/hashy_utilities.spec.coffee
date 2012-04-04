describe 'utilities', ->

    it 'map', ->
        result = map [1, 2, 3], (n) -> n * 2
        expect(result).toEqual([2, 4, 6])

    it 'any', ->
        result = any [1, 2, 3], (n) -> n > 2
        expect(result).toBeTruthy()

    it '!any', ->
        result = any [1, 2, 3], (n) -> n > 6
        expect(result).toBeFalsy()

    it 'is_array', ->
        result = is_array [1, 2, 3]
        expect(result).toBeTruthy()

    it '!is_array', ->
        result = is_array {}
        expect(result).toBeFalsy()

    it 'key_hash_test', ->
        result = key_hash_test '1234','2'
        expect(result).toBeTruthy()

    it '!key_hash_test', ->
        result = key_hash_test '1234','7'
        expect(result).toBeFalsy()
