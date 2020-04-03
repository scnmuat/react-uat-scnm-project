import React, { Component } from "react";

class PastMedicalCare extends Component {
  render() {
    return <div style={cardStyle}>Past Medical Care</div>;
  }
}

export default PastMedicalCare;

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
