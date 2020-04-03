import React, { Component } from "react";
import PatientDemographicsItem from "./items/PatientDemographicsItem";
import PatientInformationItem from "./items/PatientInformationItem";

class Demographics extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <PatientInformationItem />
        <PatientDemographicsItem />
      </div>
    );
  }
}

export default Demographics;

const containerStyle = {
  display: "flex",
  flexdirection: "row",
  width: "100%",
  margin: "auto",
  justifycontent: "center",
  alignitems: "center",
  textalign: "center"
};
