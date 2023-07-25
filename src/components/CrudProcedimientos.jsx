import React, { useState, useEffect } from "react";
import { getProcedimientos } from "../api/ProcCrud";
import { Icon } from "@iconify/react";
import Tabla from "./Tabla";
import ModalProc from "./ModalProc";

function CrudProcedimientos() {
  const [loading, setLoading] = useState(false);
  const [procs, setProcs] = useState([]);
  const [proc, setProc] = useState({});
  const [modalAdd, setModalAdd] = useState(false);
  const [modo, setModo] = useState("add");

  let longitude = 0;

  const FetchData = async () => {
    try {
      setLoading(true);
      let data = await getProcedimientos();
      setProcs(data);
      setLoading(false);
    } catch (error) {
      setProcs([]);
      console.log(error);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  useEffect(() => {
    longitude = procs.length;
    console.log(procs, longitude);
  }, [procs]);

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "NOMBRE",
        accessor: "nombre",
      },
      {
        Header: "DESCRIPCIÓN",
        accessor: "descripcion",
      },
      {
        Header: "ACTIVO",
        accessor: "activo",
      },
      {
        Header: "EDITAR",
        accessor: "customColumn",
        Cell: ({ row }) => (
          <div className="buttonCol">
            <button onClick={(e) => abrirModalEdit(e, row.values)}>
              <Icon
                icon="material-symbols:edit"
                color="white"
                width="13"
                height="13"
              />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const abrirModalAdd = (e) => {
    e.preventDefault();
    setModo("add");
    setModalAdd(true);
  };

  const abrirModalEdit = (e, values) => {
    e.preventDefault();
    console.log(values);
    setProc(values);
    setModo("edit");
    setModalAdd(true);
  };

  return (
    <>
      <div className="crudProcMainCont">
        <div className="table-head">
          <button onClick={(e) => abrirModalAdd(e)}>
            <Icon
              icon="carbon:add-filled"
              color="white"
              width="15"
              height="15"
            />
            <p>Agregar</p>
          </button>
        </div>
        <div className="table-cont">
          {loading ? (
            <div className="loading-cont">
              <Icon
                icon="eos-icons:bubble-loading"
                color="#202020"
                width="50"
                height="50"
              />
            </div>
          ) : longitude != 0 ? (
            <div className="no-data-cont">
              <div className="no-data-info">
                <Icon
                  icon="icomoon-free:file-empty"
                  color="#cacaca"
                  width="50"
                  height="50"
                />
                <div>no hay datos</div>
              </div>
            </div>
          ) : (
            <Tabla columns={columns} data={procs} />
          )}
        </div>
      </div>
      <ModalProc
        modalIsOpen={modalAdd}
        setIsOpen={setModalAdd}
        modo={modo}
        values={proc}
      />
    </>
  );
}

export default CrudProcedimientos;
