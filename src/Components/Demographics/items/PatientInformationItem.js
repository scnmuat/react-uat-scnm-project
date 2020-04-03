import React, { Component } from "react";

class PatientInformationItem extends Component {
  render() {
    return <div style={cardStyle}>Patient Information Item</div>;
  }
}

export default PatientInformationItem;

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
