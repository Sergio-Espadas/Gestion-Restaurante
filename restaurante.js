
// Objeto para identifica los datos de un plato
class dish {
    constructor(name, description = "", ingredients = [], image = "") {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.image = image;
    }
}


// Con este objeto podemos crear la estructura de categorías
class category {
    constructor(name, description = "") {
        this.name = name;
        this.description = description;
    }
}