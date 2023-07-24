import React from "react";
import { Icon } from "@iconify/react";

function CrudSelector({ crud, setCrud }) {
  const Selector = (selection) => {
    switch (selection) {
      case 1:
        setCrud(1);
        break;
      case 2:
        setCrud(2);
        break;
      case 3:
        setCrud(3);
        break;
      default:
        setCrud(0);
        break;
    }
  };

  return (
    <div className="crud-selector">
      <button
        className={crud == 1 ? "btnCrudSelector current" : " btnCrudSelector"}
        onClick={() => Selector(1)}
      >
        <div>
          <Icon
            icon="fluent-mdl2:date-time"
            color="#cacaca"
            width="50"
            height="50"
          />
        </div>
        <div>Citas</div>
      </button>
      <button
        className={crud == 2 ? "btnCrudSelector current" : " btnCrudSelector"}
        onClick={() => Selector(2)}
      >
        <div>
          <Icon icon="mdi:user" color="#cacaca" width="50" height="50" />
        </div>
        <div>Usuarios</div>
      </button>
      <button
        className={crud == 3 ? "btnCrudSelector current" : " btnCrudSelector"}
        onClick={() => Selector(3)}
      >
        <div>
          <Icon
            icon="icon-park-outline:coordinate-system"
            color="#cacaca"
            width="50"
            height="50"
          />
        </div>
        <div>Procedimientos</div>
      </button>
    </div>
  );
}

export default CrudSelector;
