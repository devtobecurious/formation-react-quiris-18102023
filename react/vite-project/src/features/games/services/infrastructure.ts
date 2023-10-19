import { Species } from "../models/espece";
import { Games } from "../models/game";

//#region Espèces
export function getSpeciesRaw(): Species {
    return [
        {id:1, libelle: 'Humain'},
        {id:2, libelle: 'Nain'}
    ]
} 

export function getSpeciesBusiness(infra: () => Species) {
    return infra();
}
//#endregion

//#region Games
/**
 * Retourne la liste des games (sync)
 */
export function getGamesInfraEmpty(): Games {
    return [];
}

/**
 * Retourne la liste des games (sync)
 */
export function getGamesInfraTableauEnMemoire(): Games {
    return [
        {
            dateDebut: new Date(),
            id: 1,
            title: 'test 01',
            reussie: true
        },
        {
            dateDebut: new Date(),
            id: 2,
            title: 'test 02'
        }
    ];
}
//#endregion

