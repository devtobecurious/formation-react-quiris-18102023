import { Baguette, HarryPotter, SuperBaguette } from "./harry-potter";



//const baguette: Baguette = new SuperBaguette();

const hp = new HarryPotter('Harry');

const hp2: HarryPotter = {
    prenom: 'Harry',
    surnom: 'Potter'
}

function afficherHP(hp: { prenom: string }) {
    console.log(hp.prenom);
}
afficherHP(hp2);
afficherHP(hp);

afficherHP({ prenom: '1', surnom: '' } as HarryPotter);

//////////////////

const baguette2: Baguette = {
    id: 1,
    matiere: 'bois',
    sorts: ['expelliarmus']
}

type AvecMatiere = { matiere: string };

function afficherMatiere(b: AvecMatiere) {
    console.log(b.matiere);
}
afficherMatiere(baguette2);
afficherMatiere({matiere: 'bois', id: 1, sorts: []} as Baguette);