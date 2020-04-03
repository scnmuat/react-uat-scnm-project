import React, { Component } from "react";
import EnvironmentalFactorsItem from "./item/EnvironmentalFactorsItem";
import RelationshipFactorsItem from "./item/RelationshipFactorsItem";
import StressManagementItem from "./item/StressManagementItem";

class SocialHistory extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <EnvironmentalFactorsItem />
        <RelationshipFactorsItem />
        <StressManagementItem />
      </div>
    );
  }
}

export default SocialHistory;

const containerStyle = {
  display: "flex",
  flexdirection: "row",
  width: "100%",
  margin: "auto",
  justifycontent: "center",
  alignitems: "center",
  textalign: "center"
};
