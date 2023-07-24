import React, { useState, useEffect } from "react";
import { getProcedimientos } from "../api/ProcCrud";
import { useTable } from "react-table";
import { Icon } from "@iconify/react";

function CrudProcedimientos() {
  const [loading, setLoading] = useState(false);
  const [procs, setProcs] = useState([]);
  let data = [];

  const FetchData = async () => {
    try {
      setLoading(true);
      let data = await getProcedimientos();
      console.log(data);
      setLoading(false);
      return data;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    setProcs(FetchData());
  }, []);

  useEffect(() => {
    console.log(procs);
    data = React.useMemo(() => procs, []);
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
            <button onClick={() => console.log(row.values)}>
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="crudProcMainCont">
      <div className="table-head">
        <button>
          <Icon icon="carbon:add-filled" color="white" width="10" height="10" />
          <p>Agregar</p>
        </button>
      </div>
      {loading ? (
        <div className="loading-cont">
          <Icon
            icon="eos-icons:three-dots-loading"
            color="white"
            width="10"
            height="10"
          />
        </div>
      ) : procs.length != 0 ? (
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
        <div className="table-cont">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CrudProcedimientos;
