import { Games } from "../models/game";

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

