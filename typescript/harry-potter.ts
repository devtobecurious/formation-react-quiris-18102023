export interface Baguette {
    id: number;
    matiere: string;
    sorts: string[];
}

export type StringOrNothing = string | undefined | null;

export class SuperBaguette  {
    id: number;
    matiere: StringOrNothing;
    sorts !: string[];

    constructor(id: number) {
        this.id = id;
    }

    lancerSort(sort: string) {
        if(this.matiere) {
            console.info(this.matiere.toUpperCase())
        }
        console.log('Lancer le sort ' + this.matiere?.toLowerCase());
    }
}


export class HarryPotter {
    prenom: string = 'Harry';
    surnom = 'Potter';

    constructor(prenom: string) {
        console.log('Harry Potter is a wizard');
        this.prenom = prenom;
    }
}