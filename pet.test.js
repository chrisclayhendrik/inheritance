const Pet = require('./pet')


describe('Pet class', () => {
    test('has name', () => {
        const cat = new Pet('Mr Meowgi', 'Calico');
        expect(cat.name).toBe('Mr Meowgi');
    })

    test('has type', () => {
        const cat = new Pet('Mr Meowgi', 'Calico');
        expect(cat.species).toBe('Calico');
    })
})

