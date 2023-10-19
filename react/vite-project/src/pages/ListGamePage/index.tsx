import { useState } from "react";
import { FilterGames } from "../../features/games/FilterGames";
import { ListGameFinal } from "../../features/games/ListGameFinal";
import { getGamesBusinessWithSuccess } from "../../features/games/services/applicatif";
import { getGamesInfraTableauEnMemoire } from "../../features/games/services/infrastructure";

export const ListGamePage = () => {
    const [espece, setEspece] = useState('');

    const games = getGamesBusinessWithSuccess(getGamesInfraTableauEnMemoire);

    const filterGames = (labelEspece: string) => {
        console.info(`je recherche ${labelEspece}`);
        setEspece(labelEspece);
    }

    return (
        <>
            <div>
                Espece choisie : {espece}
                <FilterGames clickToSearch={filterGames}></FilterGames>
            </div>
            <div>
                <ListGameFinal items={games}></ListGameFinal>
            </div>
        </>
    );
}