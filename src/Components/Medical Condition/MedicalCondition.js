import React, { Component } from "react";
import MedicalConditionItem from "./item/MedicalConditionItem";

class MedicalCondition extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <MedicalConditionItem />
        <MedicalConditionItem />
        <MedicalConditionItem />
        <MedicalConditionItem />
      </div>
    );
  }
}

export default MedicalCondition;

const containerStyle = {
  display: "flex",
  flexdirection: "row",
  width: "100%",
  margin: "auto",
  justifycontent: "center",
  alignitems: "center",
  textalign: "center"
};
