import React from "react";
import { AgGridReact } from "ag-grid-react";
import LogoRenderer from "./LogoRenderer";

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {
          headerName: "#",
          field: "position",
          sortable: true,
          width: 20
        },
        {
          headerName: "",
          field: "team.crestUrl",
          cellRenderer: "logoRenderer",
          width: 50
        },
        {
          headerName: "",
          field: "team.name",
          sortable: true,
          width: 200
        },
        {
          headerName: "PTS",
          field: "points",
          sortable: true,
          width: 60
        },
        {
          headerName: "Pld",
          field: "playedGames",
          sortable: true,
          width: 60
        },
        {
          headerName: "W",
          field: "won",
          sortable: true,
          width: 60
        },
        {
          headerName: "D",
          field: "draw",
          sortable: true,
          width: 60
        },
        {
          headerName: "L",
          field: "lost",
          sortable: true,
          width: 60
        },
        {
          headerName: "GF",
          field: "goalsFor",
          sortable: true,
          width: 60
        },
        {
          headerName: "GA",
          field: "goalsAgainst",
          sortable: true,
          width: 60
        }
      ]
    };
  }

  // Set the columns size to make sure they are all displayed
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  };

  render() {
    const { standings } = this.props;
    const frameworkComponents = {
      logoRenderer: LogoRenderer
    };
    return (
      <div className="ag-theme-balham-dark table avion">
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={standings}
          frameworkComponents={frameworkComponents}
          onGridReady={this.onGridReady}
        />
      </div>
    );
  }
}

export default Table;
