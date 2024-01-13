class Accomodation {

    constructor(numberOfBed, bedType, fullBath, smoking) {
        if (new.target === Accomodation) throw new Error
        this.numberOfBed = numberOfBed;
        this.bedType = bedType;
        this.fullBath = fullBath;
        this.smoking = smoking;


    }


    toString() {
        return (
            this.numberOfBed + " " + this.bedType + " " + this.fullBath + " " + this.smoking
        )
    }
}


class Room extends Accomodation { }
class Suite extends Accomodation { }


class LoadingBusiness {

    #starts;
    #availableLanguager;
    #phone;

    constructor(name) {
        this.name = name;
    }

    get availableLanguager() {
        return this.#availableLanguager;
    }

    set availableLanguager(value) {
        this.#availableLanguager = value;
    }

    get starts() {
        return this.#starts;
    }

    set starts(value) {
        this.#starts = value;
    }

    get phone() {
        return this.#phone;
    }

    set phone(value) {
        this.#phone = value;
    }

    toString() {
        return (
            this.name + " " + this.#availableLanguager + " " + this.#starts + " " + this.#phone
        )

    }
}


class Hotel extends LoadingBusiness { }
class BB extends LoadingBusiness { }
class Resort extends LoadingBusiness { }


const Booking = (function () {
    let instantiated;


    class Booking {
        #resources = new Map();

        constructor() {

        }

        addLoadingBusiness(...resources) {

            // Válidamos el tipo

            for (const resource of resources) {
                if (this.#resources.has(resource.name)) throw new Error('Ya esta introducido');

                this.#resources.set(resource.name, {
                    LoadingBusiness: resource,
                    accomodations: [],
                });
            }
            return this;
        }

        *getLodgingBusiness(type) {
            for (const resource of this.#resources.values()) {
                if (resource.lodgingBusiness instanceof type) {
                    yield resource.lodgingBusiness;
                }
            }
        }

    }


    function init() {
        return new Booking();
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


function test() {
    let a1 = new Room(2, "XXL", true, true);
    let s1 = new Suite(1, "XXL", true, false);

    console.log(a1.toString);
    console.log(s1.toString);


    let l1 = new LoadingBusiness("NH");
    l1.starts = 5;
    l1.phone = "123456789";
    console.log(l1.toString);

    const booking = Booking.getInstance();

    console.log(booking.addLoadingBusiness(l1));

    let h = booking.getLodgingBusiness(Hotel);

    for (let r of h) {
        console.log(r.toString());
    }

}


test();