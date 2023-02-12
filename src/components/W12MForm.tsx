import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import WhatIs2plus2, { Answer } from "./WhatIs2plus2";
import ReasonForSparing from "./ReasonForSparing";
import DisplayFormData from "./DisplayFormData";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("");

  const [planetName, setPlanetName] = useState<string>("");

  const [numberOfBeings, setNumberOfBeings] = useState<string>("");

  const [whatIs2plus2, setWhatIs2plus2] = useState<Answer>("4");

  const [reasonForSparing, setReasonForSparing] = useState("");

  const [showData, setShowData] = useState(false);

  const collectData = () => {
    setShowData(true);
    console.log(
      speciesName,
      planetName,
      numberOfBeings,
      whatIs2plus2,
      reasonForSparing
    );
  };

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={setSpeciesName}
      />
      <PlanetName planetName={planetName} onChangePlanetName={setPlanetName} />

      <NumberOfBeings
        numberOfBeings={numberOfBeings}
        onChangeNumberOfBeings={setNumberOfBeings}
      />
      <WhatIs2plus2
        whatIs2plus2={whatIs2plus2}
        setWhatIs2plus2={setWhatIs2plus2}
      />
      <ReasonForSparing
        reasonForSparing={reasonForSparing}
        onChangeReasonOfSparing={setReasonForSparing}
      />
      <input type="submit" onClick={collectData} />

      {showData && (
        <DisplayFormData
          showData={showData}
          speciesName={speciesName}
          planetName={planetName}
          numberOfBeings={numberOfBeings}
          whatIs2plus2={whatIs2plus2}
          reasonForSparing={reasonForSparing}
        />
      )}
    </section>
  );
};

export default W12MForm;
