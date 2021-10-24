import React from "react";
import { Card } from "react-bootstrap";

export const About = () => {
  return (
    <div align="center">
      <h1>Abouth</h1>
      <hr />
      <Card
        bg="dark"
        //variant="dark"
        text="white"
        style={{ width: "12cm" }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title> ¿Que somos? </Card.Title>
          <Card.Text>Nosotros somos la cafeteria de escom la cual brindamos el serviocio de comida en la escuela</Card.Text>
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
          <Card.Title> Mision </Card.Title>
          <Card.Text>Brindar el mejor servicio de comida a los estudiantes de la ESCOM danod como resultado un servicio de calidad</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
