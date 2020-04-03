import React, { Component } from "react";

class StressManagementItem extends Component {
  render() {
    return <div style={cardStyle}>Stress Management Item</div>;
  }
}

export default StressManagementItem;

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
