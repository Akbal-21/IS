import { height } from "dom-helpers";
import React from "react";
import { Card } from "react-bootstrap";

export const Contactus = () => {
  return (
    <div align="center">
      <h1>Contact</h1>
      <hr />
      <Card
        bg="dark"
        //variant="dark"
        text="white"
        style={{ width: "12cm" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title> Telefono </Card.Title>
          <Card.Text>Numero de contacto: 5548819076</Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg="dark"
        //variant="dark"
        text="white"
        style={{ width: "12cm" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title> Corro </Card.Title>
          <Card.Text>Correo: cafeba@hotmil.com</Card.Text>
        </Card.Body>
      </Card>

      <Card
        bg="dark"
        //variant="dark"
        text="white"
        style={{ width: "12cm"}}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title> Gerente </Card.Title>
          <Card.Text>Gerente: Paco el feo</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
