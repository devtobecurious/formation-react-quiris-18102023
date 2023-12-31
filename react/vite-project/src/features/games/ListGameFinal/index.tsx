import { useState } from "react";
import { Games } from "../models/game";
import { GameRowFinal } from "./GameRowFinal";
import { Col, Row } from "react-bootstrap";

export type ListGameProps = { items: Games };

// Head component : il sait les data => le state
export const ListGameFinal = (props: ListGameProps) => {
  console.info("ListGameFinal");

  //let title = 'Liste des games';
  const [title, setTitle] = useState("Liste des games");
  // State
  // const games = getGamesBusinessWithSuccess(getGamesInfraTableauEnMemoire);

  // pour plus tard : à mettre dans une fonction => donc un tsx
  const elementsTsx = props.items.map((element) => (
    <GameRowFinal key={element.id} game={element}></GameRowFinal>
  ));

  const changeTitle = () => {
    setTitle(`${title} - ${new Date()}`);
  };

  return (
    <>
      <Row>
        <Col>
          <h1>{title}</h1>
        </Col>
        <Col>
          <button className="success" onClick={changeTitle}>AddDate</button>
        </Col>
      </Row>

      <Row>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>{elementsTsx}</tbody>
        </table>
        {/* <GameRowFinal id="15494" type="Quidditch" dateDebut="26/09/98" /> */}
      </Row>
    </>
  );
};
