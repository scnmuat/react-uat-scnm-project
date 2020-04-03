import React, { Component } from "react";
import NutritionHistoryItem from "./item/NutritionHistoryItem";
import PhysicalHistoryItem from "./item/PhysicalHistoryItem";

class NutritionHistory extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <NutritionHistoryItem />
        <NutritionHistoryItem />
        <NutritionHistoryItem />
        <PhysicalHistoryItem />
      </div>
    );
  }
}

export default NutritionHistory;

const containerStyle = {
  display: "flex",
  flexdirection: "row",
  width: "100%",
  margin: "auto",
  justifycontent: "center",
  alignitems: "center",
  textalign: "center"
};
