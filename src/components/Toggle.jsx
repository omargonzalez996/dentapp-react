import React from "react";

const Toggle = ({ toggled, setToggled }) => {
  return (
    <div className="toggle-container">
      <label>
        <input
          type="checkbox"
          defaultChecked={toggled}
          onClick={() => setToggled(!toggled)}
        />
        <span />
        <strong>{toggled ? "Activo" : "Inactivo"}</strong>
      </label>
    </div>
  );
};

export default Toggle;
