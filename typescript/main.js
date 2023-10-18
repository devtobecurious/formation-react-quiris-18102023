"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const harry_potter_1 = require("./harry-potter");
const baguette = new harry_potter_1.SuperBaguette();
const hp = new harry_potter_1.HarryPotter('Harry');
const hp2 = {
    prenom: 'Harry',
    surnom: 'Potter'
};
function afficherHP(hp) {
    console.log(hp.prenom);
}
afficherHP(hp2);
afficherHP(hp);
afficherHP({ prenom: '1' });
