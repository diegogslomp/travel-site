function Person(name, favoriteColor) {
    this.name = name;
    this.favoriteColor = favoriteColor;
    this.greet = function () {
        console.log(`${this.name} likes ${this.favoriteColor} color!`);
    }
}

var john = new Person('John Doe', 'blue');
john.greet();

var jane = new Person('Jane Smith', 'green');
jane.greet();