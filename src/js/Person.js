export default class Person {
  constructor(name) {
    this._name = name;
  }

  sayHi() {
    return `holla, ${this._name}`;
  }
}
