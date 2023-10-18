class HarryPotter {
    #name;

    constructor(name) {
        this.#name = name;
    }

    get surname() { return "Potter !"; }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }
}

const harryPotter = new HarryPotter('Harry Potter');
console.log(harryPotter.name); // Harry Potter

harryPotter.name = 'Harry Potter 2';


// function afficherHarry(harryPotter) {
//     console.log(harryPotter.name);
// }

function afficherHarry({ name, surname }) {
    console.log(name);
}
afficherHarry(harryPotter);


function MangeMorts() {
    this.nbRepas = 10;
    console.info(this.nbRepas);
    console.info(this);
}
MangeMorts();

const mangeMorts = new MangeMorts();

function Licorne() {
    this.nbCorne = 1;
    this.nbPattes = 4;

    console.info(this);
}

const licorne = new Licorne();
const newContext = Licorne.bind(mangeMorts);
newContext();

const sauter = function () {
    console.info(this);
};
const sauterO = new sauter();

// const sauterArrow = (contextThis) => {
//     console.info(contextThis);
// };

const sauterArrow = (contextThis) => console.info(contextThis);

sauterArrow(this);
//const newArrow = new sauterArrow();
