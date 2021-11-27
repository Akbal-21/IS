import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";

export const Menu = () => {
  const [proc, setproc] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:9000/producto/')
      .then(res => {
        setproc(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="mt-3">
      <div className="container">
        <CardGroup>
          {proc.map((pro) => (
            <div className="p-2" key={pro.idProducto}>
              <Card style={{ width: '18rem' }}
                bg="dark"
                text="white"
                className="mb-2"
              >
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
    </div>
  );
};
