import { getGamesBusiness } from "../services/applicatif";
import { getGamesInfra } from "../services/infrastructure";
import { GameRowFinal } from "./GameRowFinal";

// Head component : il sait les data => le state
export const ListGameFinal = () => {
  const games = getGamesBusiness(getGamesInfra);

  const elementsTsx = games.map((element) => (
    <GameRowFinal key={element.id} game={element}></GameRowFinal>
  ));

  return (
    <>
      <h1>List Game Final</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{elementsTsx}</tbody>
      </table>
      {/* <GameRowFinal id="15494" type="Quidditch" dateDebut="26/09/98" /> */}
    </>
  );
};
