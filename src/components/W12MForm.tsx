import { useState } from "react";
import W12MHeader from "./W12MHeader";
import SpeciesName from "./SpeciesName";

const W12MForm = () => {
  const [speciesName, setSpeciesName] = useState<string>("humans");

  return (
    <section className="w12MForm">
      <W12MHeader />
      <SpeciesName
        speciesName={speciesName}
        onChangeSpeciesName={e => setSpeciesName(e.target.value)}
      />
      {/* 
      <PlanetName />
      <NumberOfBeings />
      <WhatIs2plus2 /> */}
    </section>
  );
};

export default W12MForm;
