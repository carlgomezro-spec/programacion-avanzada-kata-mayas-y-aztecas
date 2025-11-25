// Warrior
class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }

    attack() {
        return this.power;
    }

    defend(damage) {
        this.life -= damage;
        console.log(`Vida: ${this.life}`);
    }
}

// Maya (extiende de la clase Warrior)
class Maya extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkColaCao() {
        this.power += 10;
        console.log("Maya bebió Cola Cao y aumentó su poder a: " + this.power);
    }
}

// Azteca (extiende de la clase Warrior)
class Azteca extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkNesquik() {
        this.life += 10;
        console.log("Azteca bebió Nesquik y aumentó su vida a: " + this.life);
    }
}


// Crear instancias de los guerreros (ejemplos)
const azteca = new Azteca(100, 15);
const maya = new Maya(100, 20);

// Azteca bebe Nesquik
azteca.drinkNesquik();

// Maya bebe Cola Cao
maya.drinkColaCao();

// Maya ataca a azteca - Azteca se defiende
console.log("Maya ataca a Azteca");
azteca.defend(maya.attack());

// Azteca ataca a maya - Maya se defiende
console.log("Azteca ataca a Maya");
maya.defend(azteca.attack());