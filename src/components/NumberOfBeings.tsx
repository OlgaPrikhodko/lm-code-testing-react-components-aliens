import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface NumberOfBeingsProps {
  numberOfBeings: string;
  onChangeNumberOfBeings(e: React.ChangeEvent<HTMLInputElement>): void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
}) => {
  const label = "Number Of Beings";
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const validate: (value: string) => string | undefined = value => {
    const errorMessage = `Numbers ONLY. Must be at least 1,000,000,000`;
    if (value.length < 10 || !/^[0-9 ]+$/.test(value)) return errorMessage;

    return undefined;
  };

  return (
    <div>
      <label htmlFor="numberOfBeings">{label}</label>
      <input
        id="numberOfBeings"
        type="text"
        value={numberOfBeings}
        onChange={e => {
          const errMessage = validate(e.target.value);
          setErrorMessage(errMessage);
          onChangeNumberOfBeings(e);
        }}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default NumberOfBeings;
