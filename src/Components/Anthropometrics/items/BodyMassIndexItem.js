import React, { Component } from "react";

class BodyMassIndexItem extends Component {
  render() {
    return <div style={cardStyle}>Body Mass Index Item</div>;
  }
}

export default BodyMassIndexItem;
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
