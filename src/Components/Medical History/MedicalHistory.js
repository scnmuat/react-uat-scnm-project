import React, { Component } from "react";
import SubstanceUse from "./item/SubstanceUse";
import PastMedicalCare from "./item/PastMedicalCare";
import MedicationItem from "./item/MedicationItem";
import FamilyHistoryItem from "./item/FamilyHistoryItem";

class MedicalHistory extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <SubstanceUse />
        <PastMedicalCare />
        <MedicationItem />
        <FamilyHistoryItem />
      </div>
    );
  }
}

export default MedicalHistory;

const containerStyle = {
  display: "flex",
  flexdirection: "row",
  width: "100%",
  margin: "auto",
  justifycontent: "center",
  alignitems: "center",
  textalign: "center"
};
