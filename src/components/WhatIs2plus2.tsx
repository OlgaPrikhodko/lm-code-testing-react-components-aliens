import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

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
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const validate: (value: string) => string | undefined = value => {
    const errorMessage = `This is not corect value!`;
    if (value !== "4") return errorMessage;

    return undefined;
  };

  const onChangeHandle = (value: string) => {
    if (!isOfAnswer(value)) return;

    const errMessage = validate(value);
    setErrorMessage(errMessage);
    setWhatIs2plus2(value);
  };

  return (
    <div>
      <label htmlFor="whatIs2plus2">{label}</label>
      <select
        name="whatIs2plus2"
        id="whatIs2plus2"
        onChange={e => {
          onChangeHandle(e.target.value);
        }}
      >
        {ANSWERS.map(answ => (
          <option value={answ} key={answ}>
            {answ}
          </option>
        ))}
      </select>
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default WhatIs2plus2;
