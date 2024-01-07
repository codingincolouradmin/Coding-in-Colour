class Pet {
  // constructor
  constructor(nameValue, ageValue, hungryValue, colorValue) {
    this.name = nameValue;
    this.age = ageValue;
    this.hungry = hungryValue;
    this.color = colorValue;
  }

  // getters and stters
  get name() {
    return this._name;
  }
  set name(value) {
    return (this._name = value);
  }

  get hungry() {
    return this._hungry;
  }
  set hungry(value) {
    return (this._hungry = value);
  }

  // methods
  eat() {
    if (this.hungry) {
      this.hungry = false;
      return `${this.name} is eating`;
    }

    return `${this.name} is not hungry right now`;
  }

  // walk() {
  //   return `${this.name} is walking`;
  // }

  // static methods
  static names() {
    return `${this.name}`;
  }
}

const catJohn = new Pet("john the cat", 1, true, "black");
const dogG = new Pet("G the dog", 10, false, "white");

console.log(Pet.names());

class Fish extends Pet {
  constructor(finsValue, nameV, ageV, hungryV, colorV) {
    super(nameV, ageV, hungryV, colorV);
    this.fins = finsValue;
  }

  eat() {
    return `${this.name} is not hungry right now but it is swimming`;
  }
}

const myfish = new Fish(2, "golden fish", "7", true, "Gold");
console.log(myfish.eat());
