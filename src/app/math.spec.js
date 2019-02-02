function add(a, b) {
    return a + b;
}

describe('Math Test Suite', () => {
    // test suite

    it('should add two positive numbers', () => {
        // expect accepts actuals, from business logic/your code result
        expect(add(1, 2)).toBe(3);
    })
})