function add(a, b) {
    return a + b
}

describe ('test add', () => {
    it('3 + 2', () => {
        expect(add(3, 2)).toEqual(5)
    })
})

