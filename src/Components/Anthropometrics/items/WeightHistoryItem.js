import React, { Component } from "react";

class WeightHistoryItem extends Component {
  render() {
    return <div style={cardStyle}>Weight History Item</div>;
  }
}

export default WeightHistoryItem;
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
