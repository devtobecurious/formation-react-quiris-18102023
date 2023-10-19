import { Games } from "../models/game";
import { GetGamesRaw } from "./custom-types";

/**
 * 
 * @param infra 
 * @returns 
 */
export function getGamesBusinessWithSuccess(infra: GetGamesRaw): Games {
    return getGamesBusiness(infra).filter(item => item.reussie);
}

/**
 * 
 * @param infra 
 * @returns 
 */
export function getGamesBusiness(infra: GetGamesRaw): Games {
    return infra();
}