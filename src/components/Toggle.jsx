import React, { useEffect } from "react";

const Toggle = ({ toggled, setToggled }) => {
  const BoolToBinary = (bool) => {
    //recibe true o false del checkbox
    if (bool) {

    }else{

    }
  };

  const BinToBool = () => {
    //convierte de binario a booleano
    if (toggled == 1) {
      setToggled(true);
    } else if (toggled == 0) {
      setToggled(false);
    }
  };
  useEffect(() => {}, []);

  return (
    <div className="toggle-container">
      <label>
        <input
          type="checkbox"
          defaultChecked={toggled}
          onClick={() => binary()}
        />
        <span />
        <strong>{toggled ? "Activo" : "Inactivo"}</strong>
      </label>
    </div>
  );
};

export default Toggle;
