import React, { Component } from "react";

class NutritionHistoryItem extends Component {
  render() {
    return <div style={cardStyle}>Nutrition History Item</div>;
  }
}

export default NutritionHistoryItem;

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
