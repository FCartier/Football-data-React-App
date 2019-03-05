import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestApiData } from "../actions";
import Table from "./Table";
import { dataset } from "../dataset/data";

export class Standings extends React.Component {
  componentDidMount() {
    this.props.requestApiData();
  }

  // I have faced an issue where sometimes the data props are empty,
  // If you encounter this issue please use the dataset instead
  render() {
    const totalStanding = this.props.data.standings[0]; //dataset.standings[0];
    const matchDay = this.props.data.season.currentMatchday; //dataset.season.currentMatchday;
    return totalStanding.table.length ? (
      <div className="container">
        <div className="header">
          <h1>Standings</h1>
          <h1>Matchday {matchDay}</h1>
        </div>
        <Table standings={totalStanding.table} />
      </div>
    ) : (
      <h1>loading...</h1>
    );
  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Standings);
