"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HarryPotter = exports.SuperBaguette = void 0;
class SuperBaguette {
}
exports.SuperBaguette = SuperBaguette;
class HarryPotter {
    constructor(prenom) {
        this.prenom = 'Harry';
        this.surnom = 'Potter';
        console.log('Harry Potter is a wizard');
        this.prenom = prenom;
    }
}
exports.HarryPotter = HarryPotter;
