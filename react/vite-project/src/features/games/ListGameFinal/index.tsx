import { GameRowFinal } from "./GameRowFinal";

export const ListGameFinal = () => {
   const table =['chaine 1', 'chaine 2', 'chaine 3'];

    const elementsTsx = table.map(() => <GameRowFinal></GameRowFinal>);

  return (
    <>
      <h1>List Game Final</h1>
      { elementsTsx }
      {/* <GameRowFinal id="15494" type="Quidditch" dateDebut="26/09/98" /> */}
      // {}
    </>
  );
};
