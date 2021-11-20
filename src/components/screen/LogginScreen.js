import React, { useState } from "react";

import { LogScreen } from "./exit/LogScreen";
import { RegScreen } from "./exit/RegScreen";

export const LogginScreen = () => {
  
  const [user, setuser] = useState({
    Nombre: '',
    ApMat: '',
    ApPat: '',
    correo: '',
    pws: '',
    roll: 2,
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <LogScreen />
        </div>
        <div className="col-6">
          <RegScreen user={user} setuser={setuser}/>
        </div>
      </div>
    </div>
  );
};
