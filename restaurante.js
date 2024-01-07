
// Objeto para identifica los datos de un plato
class dish {
    constructor(name, description = "", ingredients = [], image = "") {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.image = image;
    }

    get getName() {
        return this.name;
    }

    get getDescription() {
        return this.description;
    }

    get getIngredients() {
        return this.ingredients;
    }

    get getImage() {
        return this.image;
    }

    toString() {
        return "Name: " + this.name + "\n" + "Description: " + this.description + "\n" +
            "Ingredients: " + this.ingredients + "\n" + "Image: " + this.image;
    }
}


// Con este objeto podemos crear la estructura de categorías
class category {
    constructor(name, description = "") {
        this.name = name;
        this.description = description;
    }

    get getName() {
        return this.name;
    }

    get getDescription() {
        return this.description;
    }

    toString() {
        return "Name: " + this.name + "\n" + "Description: " + this.description;
    }
}


// Representa los alérgenos que pueden tener un determinado plato
class allergen {
    constructor(name, description = "") {
        this.name = name;
        this.description = description;
    }

    get getName() {
        return this.name;
    }

    get getDescription() {
        return this.description;
    }

    toString() {
        return "Name: " + this.name + "\n" + "Description: " + this.description;
    }
}


// Se trata de una agregación de platos
class menu {
    constructor(name, description = "") {
        this.name = name;
        this.description = description;
    }

    get getName() {
        return this.name;
    }

    get getDescription() {
        return this.description;
    }

    toString() {
        return "Name: " + this.name + "\n" + "Description: " + this.description;
    }
}


// Representa un recurso restaurante para formar parte de la cadena de restaurantes a gestionar 
class restaurant {
    constructor(name, description = "", location = "") {
        this.name = name;
        this.description = description;
        this.location = location
    }

    get getName() {
        return this.name;
    }

    get getDescription() {
        return this.description;
    }

    get getLocation() {
        return this.location;
    }

    toString() {
        return "Name: " + this.name + "\n" + "Description: " + this.description + "\n" + "Location: " + this.location;
    }
}


// Son coordenadas para localizar una ubicación.
class coordinate {
    constructor(latitude, longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    get getLatitude() {
        return this.latitude;
    }

    get getLongitude() {
        return this.longitude;
    }

    toString() {
        return "Latitud: " + this.latitude + "\n" + "Longitud: " + this.longitude;
    }
}
