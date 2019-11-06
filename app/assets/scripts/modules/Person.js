class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }

    greet() {
        console.log(`${this.name} likes ${this.favoriteColor} color!`);
    }
}

export default Person