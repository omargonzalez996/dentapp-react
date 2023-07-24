import React, { useState } from "react";
import CrudSelector from "../components/CrudSelector";
import CrudProcedimientos from "../components/CrudProcedimientos";
function Control() {
  const [crud, setCrud] = useState(0);
  return (
    <div className="mainContainerControl">
      <div>
        <CrudSelector crud={crud} setCrud={setCrud} />
      </div>
      <div className="current-crud-container">
        {crud == 3 ? <CrudProcedimientos /> : null}
      </div>
    </div>
  );
}

export default Control;
