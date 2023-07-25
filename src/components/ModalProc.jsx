import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import Toggle from "./Toggle";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalProc({ modalIsOpen, setIsOpen, modo, values }) {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [activo, setActivo] = useState(1);
  const [formReady, setFormReady] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (nombre.length > 6 && descripcion.length > 10) {
      setFormReady(true);
    } else {
      setFormReady(false);
    }
  }, [nombre, descripcion]);

  useEffect(() => {
    if (modo == "edit") {
      setActivo(values.activo);
      setNombre(values.nombre);
      setDescripcion(values.descripcion);
    }
  }, []);

  return (
    <div>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Procedimiento"
      >
        <div className="modal-content">
          <div className="titulo-modal">
            {modo == "add" ? (
              <h2>Agregar Procedimiento</h2>
            ) : modo == "edit" ? (
              <h2>Editar Procedimiento</h2>
            ) : null}
          </div>
          <div className="modal-form">
            <div className="modal-input">
              <label htmlFor="nombre">Nombre</label>
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                maxLength={100}
                name="nombre"
                type="text"
              />
            </div>
            <div className="modal-textarea">
              <label htmlFor="desc">Descripción</label>
              <textarea
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                maxLength={200}
                name="desc"
              />
            </div>
            <div className={modo == "add" ? "toggle-desactivado" : null}>
              <Toggle toggled={activo} setToggled={setActivo} />
            </div>
            <div className="btn-container">
              <button disabled={!formReady}>
                {modo == "add" ? "Agregar" : modo == "edit" ? "Editar" : null}
              </button>
            </div>
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default ModalProc;
