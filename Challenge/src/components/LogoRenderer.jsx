import React, { Component } from "react";

export default class LogoRenderer extends Component {
  render() {
    return (
      <span>
        {this.props.value !== null ? (
          <img alt="logo" src={this.props.data.team.crestUrl} />
        ) : (
          ""
        )}
      </span>
    );
  }
}
