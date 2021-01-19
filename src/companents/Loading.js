import React, { Component } from "react";
import "../css/loading.css"

export default class Loading extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="loader">
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--dot"></div>
            <div className="loader--text"></div>
          </div>
        </div>
      </div>
    );
  }
}
