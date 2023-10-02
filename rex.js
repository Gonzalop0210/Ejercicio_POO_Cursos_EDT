class Rex extends Animal {
    constructor(nombre, raza, tamaño, muerde, animal) {
        super(nombre, raza, tamaño, muerde)
        this.animal = animal
    }

    getAnimal() {
        return this.animal
    }
    setAnimal(animalNuevo) {
        this.animal = animalNuevo
    }
}

const llamarRex = new Rex('Rex', 'Cocker Spanish', 'Chico', true, 'Perro')

console.log(`Hola, me llamo ${llamarRex.nombre} y soy un ${llamarRex.animal}`);

