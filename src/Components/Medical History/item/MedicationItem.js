import React, { Component } from "react";

class MedicationItem extends Component {
  render() {
    return <div style={cardStyle}>Medication Item</div>;
  }
}

export default MedicationItem;

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
