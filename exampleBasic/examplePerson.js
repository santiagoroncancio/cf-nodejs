function Person(name) {
    this.name = name;
}

Person.prototype.hello = function () {
    console.log('Hello ' + this.name + '!');
}

const santiago = new Person('Santiago');
santiago.hello();