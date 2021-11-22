const Pet = require('./pet')


describe('Pet class', () => {
    test('has name', () => {
        const p1 = new Pet('Mr Meowgi', 'Cat', 'Brown');
        expect(p1.name).toBe('Mr Meowgi');
    })

    test('has type', () => {
        const p1 = new Pet('Mr Meowgi', 'Cat', 'Brown')
        expect(p1.species).toBe('Cat');
    })
})

