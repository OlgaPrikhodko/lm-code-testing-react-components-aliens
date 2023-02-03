import React from "react";

export const ANSWERS = ["4", "Not 4"] as const;
export type Answer = typeof ANSWERS[number];

function isOfAnswer(value: string): value is Answer {
  return ANSWERS.includes(value as Answer);
}

interface WhatIs2plus2Props {
  whatIs2plus2: Answer;
  setWhatIs2plus2(value: Answer): void;
}

const WhatIs2plus2: React.FC<WhatIs2plus2Props> = ({
  whatIs2plus2,
  setWhatIs2plus2,
}) => {
  const label = "What is 2 + 2?";

  const onChangeWhatIs2plus2 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (isOfAnswer(value)) setWhatIs2plus2(value);
  };

  return (
    <div>
      <label htmlFor="whatIs2plus2">{label}</label>
      <select
        name="whatIs2plus2"
        id="whatIs2plus2"
        onChange={onChangeWhatIs2plus2}
      >
        {ANSWERS.map(answ => (
          <option value="whatIs2plus2">{answ}</option>
        ))}
      </select>
    </div>
  );
};

export default WhatIs2plus2;
