import React, { Component } from "react";

class RelationshipFactorsItem extends Component {
  render() {
    return <div style={cardStyle}>Relationship Factors Item </div>;
  }
}

export default RelationshipFactorsItem;

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
