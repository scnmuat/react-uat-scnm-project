import React, { Component } from "react";

class PhysicalHistoryItem extends Component {
  render() {
    return <div style={cardStyle}> Physical History Item</div>;
  }
}

export default PhysicalHistoryItem;

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
