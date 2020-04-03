import React, { Component } from "react";
import WeightHistoryItem from "./items/WeightHistoryItem";
import PatientMeasurementsItem from "./items/PatientMeasurementsItem";
import BodyMassIndexItem from "./items/BodyMassIndexItem";
import SkinFoldThicknessItem from "./items/SkinFoldThicknessItem";
class Anthropometrics extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <WeightHistoryItem />
        <PatientMeasurementsItem />
        <BodyMassIndexItem />
        <SkinFoldThicknessItem />
      </div>
    );
  }
}

export default Anthropometrics;

const containerStyle = {
  display: "flex",
  flexdirection: "row",
  width: "100%",
  margin: "auto",
  justifycontent: "center",
  alignitems: "center",
  textalign: "center"
};
