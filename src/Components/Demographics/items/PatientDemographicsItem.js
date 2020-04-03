import React, { Component } from "react";
class PatientDemographicsItem extends Component {
  render() {
    return <div style={cardStyle}>Patient Demographics Item</div>;
  }
}

export default PatientDemographicsItem;
const cardStyle = {
  display: "flex",
  flexdirection: "column",
  width: "100%",
  margin: "auto",
  justifycontent: "center",
  alignitems: "center",
  textalign: "center",

  padding: "1rem",
  border: "#ccc 1px solid"
};
