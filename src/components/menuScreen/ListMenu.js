import React from "react";
import { Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";

export const ListMenu = ({ proc }) => {
  console.log({ proc });
  return (
    <div className="container">
      <CardGroup>
        {proc.map((pro) => (
          <div className="mb-2 mt-2 ">
            <Card key={pro.idProducto} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={pro.imgPath} />
              <Card.Body>
                <Card.Title>{pro.Nombre}</Card.Title>
                <Card.Text>
                  {pro.descripcion}
                  <br />
                  Precio: ${pro.precio}
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </CardGroup>
    </div>
  );
};
