import React from "react";
import Accordion from "./AccordionMenu/Accordion";
// import PlaceHolder from "./Components/PlaceHolder";
import Demographics from "./Components/Demographics/Demographics";
import Anthropometrics from "./Components/Anthropometrics/Anthropometrics";
import MedicalCondition from "./Components/Medical Condition/MedicalCondition";
import MedicalHistory from "./Components/Medical History/MedicalHistory";
import NutritionHistory from "./Components/Nutrition History/NutritionHistory";
import SocialHistory from "./Components/Social History/SocialHistory";

function App() {
  return (
    <div>
      <Accordion title="Demographics">
        <span className="accordion-text">
          <Demographics />
        </span>
      </Accordion>

      <Accordion title="Anthropometrics">
        <span className="accordion-text">
          <Anthropometrics />
        </span>
      </Accordion>
      <Accordion title="Medical Condition">
        <span className="accordion-text">
          <MedicalCondition />
        </span>
      </Accordion>
      <Accordion title="Medical History">
        <span className="accordion-text">
          <MedicalHistory />
        </span>
      </Accordion>
      <Accordion title="Nutrition History">
        <span className="accordion-text">
          <NutritionHistory />
        </span>
      </Accordion>
      <Accordion title="Social History">
        <span className="accordion-text">
          <SocialHistory />
        </span>
      </Accordion>
    </div>
  );
}

export default App;
