import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";
import PlanetName from "./PlanetName";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("humans");

  const [planetName, setPlanetName] = useState<string>("Mars");

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
      {/* 
      <NumberOfBeings />
      <WhatIs2plus2 /> */}
    </section>
  );
};

export default W12MForm;
