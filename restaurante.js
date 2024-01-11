
// Objeto para identifica los datos de un plato
class Dish {

    #name;
    #description;
    #ingredients;
    #image;

    constructor(name, description = "", ingredients = [], image = "") {
        this.#name = name;
        this.#description = description;
        this.#ingredients = ingredients;
        this.#image = image;


        // Get y set de name
        Object.defineProperty(this, 'name', {
            enumerable: true,
            get() {
                return this.#name;
            },
            set(value) {
                if (!value) throw new EmptyValueException('name');
                this.#name = value;
            },
        });


        // Get y set de description
        Object.defineProperty(this, 'description', {
            enumerable: true,
            get() {
                return this.#description;
            },
            set(value) {
                if (!value) throw new EmptyValueException('description');
                this.#description = value;
            },
        });


        // Get y set de ingredients
        Object.defineProperty(this, 'ingredients', {
            enumerable: true,
            get() {
                return this.#ingredients;
            },
            set(value) {
                if (!value) throw new EmptyValueException('ingredients');
                this.#ingredients = value;
            },
        });


        // Get y set de image
        Object.defineProperty(this, 'image', {
            enumerable: true,
            get() {
                return this.#image;
            },
            set(value) {
                if (!value) throw new EmptyValueException('image');
                this.#image = value;
            },
        });
    }

    toString() {
        return "Name: " + this.#name + "\n" + "Description: " + this.#description + "\n" +
            "Ingredients: " + this.#ingredients + "\n" + "Image: " + this.#image;
    }
}


// Con este objeto podemos crear la estructura de categorías
class Category {
    #name;
    #description;

    constructor(name, description = " ") {

        this.#name = name;
        this.#description = description;

        // Get y set de name
        Object.defineProperty(this, 'name', {
            enumerable: true,
            get() {
                return this.#name;
            },
            set(value) {
                if (!value) throw new EmptyValueException('name');
                this.#name = value;
            },
        });


        // Get y set de description
        Object.defineProperty(this, 'description', {
            enumerable: true,
            get() {
                return this.#description;
            },
            set(value) {
                if (!value) throw new EmptyValueException('description');
                this.#description = value;
            },
        });
    }

    toString() {
        return "Name: " + this.#name + "\n" + "Description: " + this.#description;
    }
}


// Representa los alérgenos que pueden tener un determinado plato
class Allergen {
    #name;
    #description;

    constructor(name, description = " ") {

        this.#name = name;
        this.#description = description;


        // Get y set de name
        Object.defineProperty(this, 'name', {
            enumerable: true,
            get() {
                return this.#name;
            },
            set(value) {
                if (!value) throw new EmptyValueException('name');
                this.#name = value;
            },
        });


        // Get y set de description
        Object.defineProperty(this, 'description', {
            enumerable: true,
            get() {
                return this.#description;
            },
            set(value) {
                if (!value) throw new EmptyValueException('description');
                this.#description = value;
            },
        });
    }

    toString() {
        return "Name: " + this.#name + "\n" + "Description: " + this.#description;
    }
}


// Se trata de una agregación de platos
class Menu {
    #name;
    #description;

    constructor(name, description = " ") {

        this.#name = name;
        this.#description = description;


        // Get y set de name
        Object.defineProperty(this, 'name', {
            enumerable: true,
            get() {
                return this.#name;
            },
            set(value) {
                if (!value) throw new EmptyValueException('name');
                this.#name = value;
            },
        });


        // Get y set de description
        Object.defineProperty(this, 'description', {
            enumerable: true,
            get() {
                return this.#description;
            },
            set(value) {
                if (!value) throw new EmptyValueException('description');
                this.#description = value;
            },
        });
    }


    toString() {
        return "Name: " + this.#name + "\n" + "Description: " + this.#description;
    }
}


// Representa un recurso restaurante para formar parte de la cadena de restaurantes a gestionar 
class Restaurant {

    #name;
    #description;
    #location;

    constructor(name, description = "", location = "") {
        this.#name = name;
        this.#description = description;
        this.#location = location


        // Get y set de name
        Object.defineProperty(this, 'name', {
            enumerable: true,
            get() {
                return this.#name;
            },
            set(value) {
                if (!value) throw new EmptyValueException('name');
                this.#name = value;
            },
        });


        // Get y set de description
        Object.defineProperty(this, 'description', {
            enumerable: true,
            get() {
                return this.#description;
            },
            set(value) {
                if (!value) throw new EmptyValueException('description');
                this.#description = value;
            },
        });


        // Get y set de location
        Object.defineProperty(this, 'location', {
            enumerable: true,
            get() {
                return this.#location;
            },
            set(value) {
                if (!value) throw new EmptyValueException('location');
                this.#location = value;
            },
        });
    }


    toString() {
        return "Name: " + this.#name + "\n" + "Description: " + this.#description + "\n" + "Location: " + this.#location;
    }
}


// Son coordenadas para localizar una ubicación.
class Coordinate {

    #latitude;
    #longitude;

    constructor(latitude, longitude) {
        this.#latitude = latitude;
        this.#longitude = longitude;


        // Get y set de latitude
        Object.defineProperty(this, 'latitude', {
            enumerable: true,
            get() {
                return this.#latitude;
            },
            set(value) {
                if (!value) throw new EmptyValueException('latitude');
                this.#latitude = value;
            },
        });


        // Get y set de longitude
        Object.defineProperty(this, 'longitude', {
            enumerable: true,
            get() {
                return this.#longitude;
            },
            set(value) {
                if (!value) throw new EmptyValueException('longitude');
                this.#longitude = value;
            },
        });
    }


    toString() {
        return "Latitud: " + this.#latitude + "\n" + "Longitud: " + this.#longitude;
    }
}


// Objeto RestaurantsManager (Singleton)
let RestaurantsManager = (function () {
    let instantiated;

    class RestaurantsManager {

        #systemName = "Nombre del Sistema";
        #categories = [];
        #allergens = [];
        #dishes = [];
        #menus = [];
        #restaurants = [];


        // Getter para obtener un iterador de categorías
        getCategories() {
            let categoryIterator = this.#categories.values();

            return {
                next: function () {
                    return categoryIterator.next();
                }
            };
        }


        // Getter para obtener un iterador de menús
        getMenus() {
            let menuIterator = this.#menus.values();

            return {
                next: function () {
                    return menuIterator.next();
                }
            };
        }


        // Getter para obtener un iterador de alérgenos
        getAllergens() {
            let allergenIterator = this.#allergens.values();

            return {
                next: function () {
                    return allergenIterator.next();
                }
            };
        }


        // Getter para obtener un iterador de restaurantes
        getRestaurants() {
            let restaurantIterator = this.#restaurants.values();

            return {
                next: function () {
                    return restaurantIterator.next();
                }
            };
        }


        // Método para añadir una nueva categoría
        addCategory(...newCategory) {
            for (const category of newCategory) {
                // Verificar si newCategory es una instancia de la clase Category
                if (!(category instanceof Category)) {
                    throw new Error("La categoría no es un objeto Category.");
                }

                // Verificar si la categoría ya existe
                if (this.#categories.includes(category)) {
                    throw new Error("La categoría ya existe.");
                }

                // Añadir la nueva categoría
                this.#categories.push(category);
            }

            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar una categoría
        removeCategory(...categoriesToRemove) {
            for (const category of categoriesToRemove) {
                // Verificar si categoryToRemove es una instancia de la clase Category
                if (!(category instanceof Category)) {
                    throw new Error("La categoría no es un objeto Category.");
                }


                // Verificar si la categoría está registrada
                // if (!this.#categories.includes(categoryToRemove)) {
                //     throw new Error("La categoría no está registrada.");
                // }


                // Desasignar platos de la categoría antes de eliminarla
                // this.#dishes.forEach(dish => {
                //     dish.#categories.delete(categoryToRemove);
                // });


                let position = this.#categories.findIndex((elemento) => elemento.name === category.name);

                console.log(position);

                // Eliminar la categoría del sistema
                this.#categories.splice(position, 1);

            }
            // Permitir encadenar llamadas
            return this;
        }


        // Método para añadir un menú
        addMenu(...menuToAdd) {
            for (const menu of menuToAdd) {
                // Verificar si menuToAdd es una instancia de la clase Menu
                if (!(menu instanceof Menu)) {
                    throw new Error("El menú no es un objeto Menu.");
                }

                // Verificar si el menú ya existe
                if (this.#menus.includes(menu)) {
                    throw new Error("El menú ya existe.");
                }

                // Añadir el menú al sistema
                this.#menus.push(menu);
            }


            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un menú
        removeMenu(...menuToRemove) {
            for (const menu of menuToRemove) {

                // Verificar si menuToAdd es una instancia de la clase Menu
                if (!(menu instanceof Menu)) {
                    throw new Error("El menú no es un objeto Menu.");
                }

                // Verificar si el menú ya existe
                // if (this.#menus.includes(menu)) {
                //     throw new Error("El menú ya existe.");
                // }

                let position = this.#menus.findIndex((elemento) => elemento.name === menu.name);

                console.log(position);

                // Eliminar el menu del sistema
                this.#categories.splice(position, 1);
            }

            // Permitir encadenar llamadas
            return this;
        }


        // Método para añadir un alérgeno
        addAllergen(...allergenToAdd) {
            for (const allergen of allergenToAdd) {
                // Verificar si allergenToAdd es una instancia de la clase Allergen
                if (!(allergen instanceof Allergen)) {
                    throw new Error("El alérgeno no es un objeto Allergen.");
                }

                // Verificar si el alérgeno ya existe
                // if (this.#allergens.includes(allergen)) {
                //     throw new Error("El alérgeno ya existe.");
                // }

                // Añadir el alérgeno al sistema
                this.#allergens.push(allergen);
            }
            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un alérgeno
        removeAllergen(...allergenToRemove) {
            for (const allergen of allergenToRemove) {
                // Verificar si allergenToRemove es una instancia de la clase Allergen
                if (!(allergen instanceof Allergen)) {
                    throw new Error("El alérgeno no es un objeto Allergen.");
                }

                // Verificar si el alérgeno está registrado
                // if (!this.#allergens.includes(allergen)) {
                //     throw new Error("El alérgeno no está registrado.");
                // }

                let position = this.#allergens.findIndex((elemento) => elemento.name === allergen.name);

                console.log(position);

                // Eliminar el alergeno del sistema
                this.#allergens.splice(position, 1);
            }

            // Permitir encadenar llamadas
            return this;
        }


        // Método para añadir un plato
        addDish(...dishToAdd) {
            for (const dish of dishToAdd) {
                // Verificar si dishToAdd es una instancia de la clase Dish
                if (!(dish instanceof Dish)) {
                    throw new Error("El plato no es un objeto Dish.");
                }

                // Verificar si el plato ya existe
                // if (this.#dishes.includes(dish)) {
                //     throw new Error("El plato ya existe.");
                // }

                // Añadir el plato al sistema
                this.#dishes.push(dish);
            }

            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un plato
        removeDish(...dishToRemove) {
            for (const dish of dishToRemove) {
                // Verificar si dishToRemove es una instancia de la clase Dish
                if (!(dish instanceof Dish)) {
                    throw new Error("El plato no es un objeto Dish.");
                }

                // Verificar si el plato está registrado
                // if (!this.#dishes.includes(dish)) {
                //     throw new Error("El plato no está registrado.");
                // }

                let position = this.#dishes.findIndex((elemento) => elemento.name === dish.name);

                console.log(position);

                // Eliminar el plato del sistema
                this.#dishes.splice(position, 1);

            }
            // Desasignar plato de categorías, alérgenos y menús
            // dishToRemove.categories.forEach(category => {
            //     category.#dishes.delete(dishToRemove);
            // });

            // dishToRemove.allergens.forEach(allergen => {
            //     allergen.#dishes.delete(dishToRemove);
            // });

            // dishToRemove.menus.forEach(menu => {
            //     menu.#dishes.delete(dishToRemove);
            // });

            // Permitir encadenar llamadas
            return this;
        }


        // Método para añadir un restaurante
        addRestaurant(...restaurantToAdd) {
            for (const restaurant of restaurantToAdd) {
                // Verificar si restaurantToAdd es una instancia de la clase Restaurant
                if (!(restaurant instanceof Restaurant)) {
                    throw new Error("El restaurante no es un objeto Restaurant.");
                }

                // Verificar si el restaurante ya existe
                // if (this.#restaurants.includes(restaurant)) {
                //     throw new Error("El restaurante ya existe.");
                // }

                // Añadir el restaurante al sistema
                this.#restaurants.push(restaurant);
            }

            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un restaurante
        removeRestaurant(...restaurantToRemove) {
            for (const restaurant of restaurantToRemove) {
                // Verificar si restaurantToRemove es una instancia de la clase Restaurant
                if (!(restaurant instanceof Restaurant)) {
                    throw new Error("El restaurante no es un objeto Restaurant.");
                }

                // Verificar si el restaurante está registrado
                if (!this.restaurants.has(restaurant)) {
                    throw new Error("El restaurante no está registrado.");
                }

                let position = this.#restaurants.findIndex((elemento) => elemento.name === restaurant.name);

                console.log(position);

                // Eliminar el restaurante del sistema
                this.#restaurants.splice(position, 1);
            }
            // Permitir encadenar llamadas
            return this;
        }
    }


    function init() {
        let rManager = new RestaurantsManager();
        Object.freeze(rManager);
        return rManager;
    }

    return {
        getInstance() {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        },
    };
}());


// Funciones de testeo
function testTask() {

    // Probamos el singelton para ver que son la misma instancia
    let restaurantSergio = RestaurantsManager.getInstance();
    let restaurantArturo = RestaurantsManager.getInstance();

    console.log(restaurantSergio === restaurantArturo);

    // Crear un objeto de la clase Dish
    let spaghetti = new Dish("Spaghetti", "Spaghetti con tomate",
        ["Spaghetti", "Tomate"],
        "URL_Spaghetti_Con_Tomate");

    // Crear un objeto de la clase Category
    let pasta = new Category("Pasta", "Platos Tipicos");

    // Crear un objeto de la clase Allergen
    let gluten = new Allergen("Gluten", "La pasta contiene gluten");

    // Crear un objeto de la clase Menu
    let menuDia = new Menu("Menu del Día", "Menu diario del restaurante");

    // Crear un objeto de la clase Coordinate
    let coordenadasSergio = new Coordinate(40.7128, -74.0060);

    // Crear un objeto de la clase Restaurant
    let cocinaDeSergio = new Restaurant("La cocina de Sergio", "Restaurante tradicional", coordenadasSergio);


    // Añadimos una categoría
    try {
        // Intentar añadir una nueva categoría
        restaurantSergio.addCategory(pasta);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al añadir la categoría: " + error.message);
    }


    // Eliminamos la categoria 
    try {
        // Intentar eliminar una categoría
        restaurantSergio.removeCategory(pasta);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al eliminar la categoría: " + error);
    }


    // Añadimos un menu
    try {
        // Intentar añadir un menú
        restaurantSergio.addMenu(menuDia);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al añadir el menú: " + error.message);
    }


    // Eliminamos un menu
    try {
        // Intentar eliminar un menú
        restaurantSergio.removeMenu(menuDia);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al eliminar el menú: " + error.message);
    }


    // Añadimos alergenos
    try {
        // Intentar añadir un alérgeno
        restaurantSergio.addAllergen(gluten);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al añadir el alérgeno: " + error.message);
    }


    // Eliminamos alergenos
    try {
        // Intentar eliminar un alérgeno
        restaurantSergio.removeAllergen(gluten);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al eliminar el alérgeno: " + error.message);
    }


    // Añadimos un plato
    try {
        // Intentar añadir un plato
        restaurantSergio.addDish(spaghetti);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al añadir el plato: " + error.message);
    }


    // Eliminamos un plato
    try {
        // Intentar eliminar un plato
        restaurantSergio.removeDish(spaghetti);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al eliminar el plato: " + error.message);
    }


    // Añadimos un restaurante
    try {
        // Intentar añadir un restaurante
        restaurantSergio.addRestaurant(cocinaDeSergio);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al añadir el restaurante: " + error.message);
    }


    // Eliminamos restaurante
    try {
        // Intentar eliminar un restaurante
        restaurantSergio.removeRestaurant(cocinaDeSergio);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al eliminar el restaurante: " + error.message);
    }
}

testTask();
