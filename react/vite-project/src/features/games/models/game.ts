/**
 * Ceci est un game à afficher
 */
export interface Game {
    id: number;
    title: string;
    dateDebut: Date;
    dateFin?: Date;
    reussie?: boolean; 
}

/** */
export type Games = Game[];

/**
 * 
 */
export type GamesOrNothing = Games | null | undefined;