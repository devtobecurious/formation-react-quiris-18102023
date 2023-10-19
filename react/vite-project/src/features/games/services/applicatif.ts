import { Games } from "../models/game";
import { GetGamesRaw } from "./custom-types";

/**
 * 
 * @param infra 
 * @returns 
 */
export function getGamesBusiness(infra: GetGamesRaw): Games {
    const result = infra();
    return result;
}