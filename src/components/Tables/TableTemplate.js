import React from "react";
import ReactTable from "react-table";
import Button from "react-bootstrap/Button";
import "react-table/react-table.css";
import styled from "styled-components";

const StyledButton = styled(Button)`
  margin-left: 5px;
`;

const TableTemplate = ({ filteredEmployees, openEditForm, deleteEmployee }) => {
  const columns = React.useMemo(
    () => [
      {
        // Code and Assigned will be shown in Admin page which will be implement in the future
        columns: [
          { Header: "Nombre", accessor: "name" },
          { Header: "Titulo", accessor: "profession" },
          { Header: "Aptitudes", accessor: "habilities" },
          { Header: "Ciudad", accessor: "city" },
          { Header: "Provincia", accessor: "province" },
          { Header: "Pais", accessor: "country", show: false },
          {
            Header: "Opciones",
            id: "actions",
            width: 140,
            Cell: ({ row }) => {
              return (
                <div>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => openEditForm(row.id)}
                  >
                    Editar
                  </Button>
                  <StyledButton
                    variant="danger"
                    size="sm"
                    onClick={() => deleteEmployee(row.id)}
                  >
                    Dar de Baja
                  </StyledButton>
                </div>
              );
            },
          },
        ],
      },
    ],
    // eslint-disable-next-line
    []
  );

  return (
    <ReactTable
      className="-striped -highlight"
      data={filteredEmployees}
      columns={columns}
      defaultPageSize={10}
      style={{
        borderColor: "#a5a4a4",
        borderRadius: "5px",
        borderStyle: "outset",
      }}
    />
  );
};

export default TableTemplate;
