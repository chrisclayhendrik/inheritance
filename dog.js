const Pet = require('./pet')

class Dog extends Pet {
    
    constructor(name, color, breed) {
        super(name, color, 'Dog')
        this.breed = breed
    }

    bark(sound) {
        return `this dog goes ${sound}`
    }
}



module.exports = Dog