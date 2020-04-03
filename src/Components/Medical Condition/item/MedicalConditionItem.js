import React, { Component } from "react";
class MedicalConditionItem extends Component {
  render() {
    return <div style={cardStyle}>Medical Condition Item</div>;
  }
}

export default MedicalConditionItem;

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
