import React from "react";

import { LogScreen } from "./exit/LogScreen";
import { RegScreen } from "./exit/RegScreen";

export const LogginScreen = ({history}) => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <LogScreen hystory={history}/>
        </div>
        <div className="col-6">
          <RegScreen />
        </div>
      </div>
    </div>
  );
};
