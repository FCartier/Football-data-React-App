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

  render() {
    const totalStanding = this.props.standings;
    return totalStanding.table.length ? (
      <div className="container">
        <div className="header">
          <h1>Standings</h1>
          <h1>Matchday {this.props.matchDay}</h1>
        </div>
        <Table standings={totalStanding.table} />
      </div>
    ) : (
      <h1>loading...</h1>
    );
  }
}

const mapStateToProps = state => ({
  standings: state.data.standings[0],
  matchDay: state.data.season.currentMatchday
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Standings);
