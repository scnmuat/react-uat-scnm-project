import React, { Component } from "react";
class EnvironmentalFactorsItem extends Component {
  render() {
    return <div style={cardStyle}>Environmental Factors Item</div>;
  }
}

export default EnvironmentalFactorsItem;
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
