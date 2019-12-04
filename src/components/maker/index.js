import React, { Component } from "react";
import { connect } from "react-redux";
import Page from "./page";
class maker extends Component {
  render() {
    return <Page />;
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(maker);
