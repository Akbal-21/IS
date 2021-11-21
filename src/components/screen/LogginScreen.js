import React, { useState } from "react";

import { LogScreen } from "./exit/LogScreen";
import { RegScreen } from "./exit/RegScreen";

export const LogginScreen = ({history}) => {
  
  const [user, setuser] = useState({
    Nombre: '',
    ApMat: '',
    ApPat: '',
    correo: '',
    pws: '',
    roll: 2,
  })

  const [roll, setroll] = useState({
    correo: '',
    pws:''
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <LogScreen roll = {roll} setroll={setroll} hystory={history}/>
        </div>
        <div className="col-6">
          <RegScreen user={user} setuser={setuser}/>
        </div>
      </div>
    </div>
  );
};
