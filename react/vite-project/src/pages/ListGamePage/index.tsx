import { FilterGames } from "../../features/games/FilterGames";
import { ListGameFinal } from "../../features/games/ListGameFinal";
import { getGamesBusinessWithSuccess } from "../../features/games/services/applicatif";
import { getGamesInfraTableauEnMemoire } from "../../features/games/services/infrastructure";

export const ListGamePage = () => {
    const games = getGamesBusinessWithSuccess(getGamesInfraTableauEnMemoire);

    const filterGames = (labelEspece: string) => {
        console.info(`je recherche ${labelEspece}`);
    }

    return (
        <>
            <div>
                <FilterGames clickToSearch={filterGames}></FilterGames>
            </div>
            <div>
                <ListGameFinal items={games}></ListGameFinal>
            </div>
        </>
    );
}