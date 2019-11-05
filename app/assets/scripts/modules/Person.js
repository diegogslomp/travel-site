function Person(name, favoriteColor) {
    this.name = name;
    this.favoriteColor = favoriteColor;
    this.greet = function () {
        console.log(`${this.name} likes ${this.favoriteColor} color!`);
    }
}

module.exports = Person;