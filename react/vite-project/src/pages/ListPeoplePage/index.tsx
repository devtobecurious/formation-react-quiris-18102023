import { Button, Card, Col, Row, Spinner } from "react-bootstrap";
import { Character } from "../../features/people/models";
import { useEffect, useState } from "react";

const peopleRaw: Character[] = [
  { description: "ddd", name: "Hermione", nbGames: 0 },
];

export const ListPeoplePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [people, setPeople] = useState<Character[]>([]);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setPeople(peopleRaw);
        setLoading(false);
    }, 1500);
  }, []);

  const peopleRows = people.map((pers) => (
    <Card key={pers.name}>
      <Card.Img variant="top" src={pers.imageUrl} />
      <Card.Body>
        <Card.Title>{pers.name}</Card.Title>
        <Card.Text>{pers.description}</Card.Text>
        {pers.nbGames <= 0 && <Button variant="primary">Jouer avec</Button>}
        {pers.nbGames > 0 && <label>Nb parties : {pers.nbGames}</label>}
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <Row>
        <Col>
          <h1>Liste des persos dans le jeu</h1>
        </Col>
      </Row>
      <Row>
        { loading && <Spinner animation="grow" /> }
        {peopleRows}
      </Row>
    </>
  );
};
