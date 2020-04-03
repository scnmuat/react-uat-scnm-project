import React, { Component } from "react";

class FamilyHistoryItem extends Component {
  render() {
    return <div style={cardStyle}>Family History Item</div>;
  }
}

export default FamilyHistoryItem;

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
