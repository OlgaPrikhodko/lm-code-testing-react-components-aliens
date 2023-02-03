import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";
import NumberOfBeings from "./NumberOfBeings";
import WhatIs2plus2, { Answer } from "./WhatIs2plus2";
import ReasonForSparing from "./ReasonForSparing";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("humans");

  const [planetName, setPlanetName] = useState<string>("Mars");

  const [numberOfBeings, setNumberOfBeings] = useState<string>("2");

  const [whatIs2plus2, setWhatIs2plus2] = useState<Answer>("4");

  const [reasonForSparing, setReasonForSparing] = useState("");

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={e => setSpeciesName(e.target.value)}
      />
      <PlanetName
        planetName={planetName}
        onChangePlanetName={e => setPlanetName(e.target.value)}
      />
      <NumberOfBeings
        numberOfBeings={numberOfBeings}
        onChangeNumberOfBeings={e => setNumberOfBeings(e.target.value)}
      />
      <WhatIs2plus2
        whatIs2plus2={whatIs2plus2}
        setWhatIs2plus2={setWhatIs2plus2}
      />
      <ReasonForSparing
        reasonForSparing={reasonForSparing}
        onChangeReasonOfSparing={e => setReasonForSparing(e.target.value)}
      />
    </section>
  );
};

export default W12MForm;
