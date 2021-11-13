import React, { useEffect, useState } from "react";
//import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { ListMenu } from "./ListMenu";

export const Menu = () => {
  const [proc, setproc] = useState([]);

  useEffect(() => {
    const getProc = () => {
      fetch("http://localhost:9000/api/")
        .then(res => res.json())
        .then(res => setproc(res));
    };
    getProc();
  }, []);

  return (
    <div className="mt-3">
      <ListMenu proc={proc}/>
    </div>
  );
};
