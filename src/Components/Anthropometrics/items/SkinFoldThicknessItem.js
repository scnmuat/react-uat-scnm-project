import React, { Component } from "react";

class SkinFoldThicknessItem extends Component {
  render() {
    return <div style={cardStyle}>Skin Fold Thickness Item</div>;
  }
}

export default SkinFoldThicknessItem;
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
