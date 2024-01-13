
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

                //Verifcar que la categoría no es null
                if (category === null) {
                    throw new Error("La categoría es Null.");
                }

                // Sacamos la posición
                let position = this.#categories.findIndex((elemento) => elemento.name === category.name)

                // Verificar si la categoría ya existe
                if (position !== -1) {
                    throw new Error("La categoría ya existe.");
                }

                // Añadir la nueva categoría
                this.#categories.push(category, {
                    dishes: [],
                });
            }

            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar una categoría
        removeCategory(...categoriesToRemove) {
            for (const category of categoriesToRemove) {

                // Sacamos la posición
                let position = this.#categories.findIndex((elemento) => elemento.name === category.name)

                // Verificar si la categoría ya existe
                if (position === -1) {
                    throw new Error("La categoría ya existe.");
                }

                console.log(position);

                // Eliminar la categoría del sistema
                this.#categories.splice(position, 1);

            }
        }


        // Método para añadir un menú
        addMenu(...menuToAdd) {
            for (const menu of menuToAdd) {
                // Verificar si menuToAdd es una instancia de la clase Menu
                if (!(menu instanceof Menu)) {
                    throw new Error("El menú no es un objeto Menu.");
                }

                //Verifcar que los menus no son null
                if (menu === null) {
                    throw new Error("El menu es null.");
                }

                // Sacamos la posición
                let position = this.#menus.findIndex((elemento) => elemento.name === menu.name)

                // Verificar si la categoría ya existe
                if (position !== -1) {
                    throw new Error("El menu ya existe.");
                }

                // Añadir el menú al sistema
                this.#menus.push(menu, {
                    dishes: [],
                });

            }


            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un menú
        removeMenu(...menuToRemove) {
            for (const menu of menuToRemove) {

                // Sacamos la posición
                let position = this.#menus.findIndex((elemento) => elemento.name === menu.name)

                // Verificar si el menu esta registrado
                if (position === -1) {
                    throw new Error("El menu ya existe.");
                }

                console.log(position);

                // Eliminar el menu del sistema
                this.#categories.splice(position, 1);
            }
        }


        // Método para añadir un alérgeno
        addAllergen(...allergenToAdd) {
            for (const allergen of allergenToAdd) {
                // Verificar si allergenToAdd es una instancia de la clase Allergen
                if (!(allergen instanceof Allergen)) {
                    throw new Error("El alérgeno no es un objeto Allergen.");
                }

                //Verifcar que el alergeno no es null
                if (allergen === null) {
                    throw new Error("El alergeno es null.");
                }

                // Sacamos la posición
                let position = this.#allergens.findIndex((elemento) => elemento.name === allergen.name)

                // Verificar si la categoría ya existe
                if (position !== -1) {
                    throw new Error("El alergeno ya existe.");
                }

                // Añadir el alérgeno al sistema
                this.#allergens.push(allergen, {
                    dishes: [],
                });
            }
            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un alérgeno
        removeAllergen(...allergenToRemove) {
            for (const allergen of allergenToRemove) {

                // Sacamos la posición
                let position = this.#allergens.findIndex((elemento) => elemento.name === allergen.name);

                // Verificar si el alergeno esta registrado
                if (position === -1) {
                    throw new Error("El alergeno no existe.");
                }

                console.log(position);

                // Eliminar el alergeno del sistema
                this.#allergens.splice(position, 1);
            }
        }


        // Método para añadir un plato
        addDish(...dishToAdd) {
            for (const dish of dishToAdd) {
                // Verificar si dishToAdd es una instancia de la clase Dish
                if (!(dish instanceof Dish)) {
                    throw new Error("El plato no es un objeto Dish.");
                }

                //Verifcar que el plato no es null
                if (dish === null) {
                    throw new Error("El plato es Null.");
                }

                // Sacamos la posición
                let position = this.#dishes.findIndex((elemento) => elemento.name === dish.name);

                // Verificar si el plato ya existe
                if (position !== -1) {
                    throw new Error("El plato ya existe.");
                }

                // Añadir el plato al sistema
                this.#dishes.push(dish, {
                    categories: [],
                    allergens: [],
                });
            }

            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un plato
        removeDish(...dishToRemove) {
            for (const dish of dishToRemove) {

                // Sacamos la posición
                let position = this.#dishes.findIndex((elemento) => elemento.name === dish.name);

                // Verificar si el plato esta registrado
                if (position === -1) {
                    throw new Error("El plato no existe.");
                }

                console.log(this.#categories[1].dishes[0].name.name);

                let prueb1 = this.#categories[1].dishes[0].name.name;

                console.log(dish.name);

                let prueb2 = dish.name;

                console.log(prueb1 === prueb2);

                // Elimina el plato de las asignaciones en categorías, alérgenos y menús
                let posCat = this.#categories.findIndex((elemento) => elemento.dishes.name === dish.name);

                console.log(posCat);

                // Eliminar el plato del sistema
                this.#dishes.splice(position, 1);

            }
        }


        // Método para añadir un restaurante
        addRestaurant(...restaurantToAdd) {
            for (const restaurant of restaurantToAdd) {
                // Verificar si restaurantToAdd es una instancia de la clase Restaurant
                if (!(restaurant instanceof Restaurant)) {
                    throw new Error("El restaurante no es un objeto Restaurant.");
                }

                //Verifcar que el restaurante no es null
                if (restaurant === null) {
                    throw new Error("La categoría es Nula.");
                }

                // Sacamos la posición
                let position = this.#restaurants.findIndex((elemento) => elemento.name === restaurant.name)

                // Verificar si la categoría ya existe
                if (position !== -1) {
                    throw new Error("La categoría ya existe.");
                }

                // Añadir el restaurante al sistema
                this.#restaurants.push(restaurant);
            }

            // Permitir encadenar llamadas
            return this;
        }


        // Método para eliminar un restaurante
        removeRestaurant(...restaurantToRemove) {
            for (const restaurant of restaurantToRemove) {

                // Sacamos la posición
                let position = this.#restaurants.findIndex((elemento) => elemento.name === restaurant.name);

                // Verificar si el restaurante esta registrado
                if (position === -1) {
                    throw new Error("El restaurante no existe.");
                }

                console.log(position);

                // Eliminar el restaurante del sistema
                this.#restaurants.splice(position, 1);
            }
        }

        // Método para asignar un plato a una categoría
        assignCategoryToDish(categoryName, dishName) {
            // Verificar si Category es null
            if (categoryName === null) {
                throw new Error("La categoría es null.");
            }

            // Verificar si Dish es null
            if (dishName === null) {
                throw new Error("El plato es null.");
            }

            // Buscar la categoría en el sistema
            let category = this.#categories.find((cat) => cat.name === categoryName);

            // Si la categoría no existe, se añade al sistema
            if (!category) {
                category = { name: categoryName, dishes: [] };
                this.#categories.push(category);
            }

            // Buscar el plato en el sistema
            let dish = this.#dishes.find((d) => d.name === dishName);

            console.log(category);

            // Si el plato no existe, se añade al sistema
            if (!dish) {
                dish = { name: dishName, categories: [] };
                this.#dishes.push(dish);
            }

            console.log(dish);

            // Asignar el plato a la categoría
            category.dishes.push(dish);
            // Asignar la categoría al plato
            dish.categories.push(category);

            // Permitir encadenar llamadas
            return this;
        }
    }

    function init() {
        return new RestaurantsManager();
    }

    return {
        getInstance() {
            if (!instantiated) {
                instantiated = init();
            }
            return instantiated;
        },
    };
})();


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


    // Añadimos alergenos
    try {
        // Intentar añadir un alérgeno
        restaurantSergio.addAllergen(gluten);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al añadir el alérgeno: " + error.message);
    }


    // Añadimos un menu
    try {
        // Intentar añadir un menú
        restaurantSergio.addMenu(menuDia);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al añadir el menú: " + error.message);
    }


    // Añadimos un plato
    try {
        // Intentar añadir un plato
        restaurantSergio.addDish(spaghetti);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al añadir el plato: " + error.message);
    }


    // Añadimos un restaurante
    try {
        // Intentar añadir un restaurante
        restaurantSergio.addRestaurant(cocinaDeSergio);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al añadir el restaurante: " + error.message);
    }


    try {
        // Añadimos un plato a una categoría
        restaurantSergio.assignCategoryToDish(pasta, spaghetti);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al enlazar categoria y plato: " + error.message);
    }




    // Eliminamos la categoria 
    try {
        // Intentar eliminar una categoría
        // restaurantSergio.removeCategory(pasta);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al eliminar la categoría: " + error);
    }


    // Eliminamos un menu
    try {
        // Intentar eliminar un menú
        restaurantSergio.removeMenu(menuDia);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al eliminar el menú: " + error.message);
    }


    // Eliminamos alergenos
    try {
        // Intentar eliminar un alérgeno
        restaurantSergio.removeAllergen(gluten);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al eliminar el alérgeno: " + error.message);
    }


    // Eliminamos un plato
    try {
        // Intentar eliminar un plato
        restaurantSergio.removeDish(spaghetti);
    } catch (error) {
        // Capturar y manejar la excepción
        console.log("Error al eliminar el plato: " + error.message);
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
