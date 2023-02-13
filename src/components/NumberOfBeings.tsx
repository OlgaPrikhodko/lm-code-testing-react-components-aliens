import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface NumberOfBeingsProps {
  numberOfBeings: string;
  onChangeNumberOfBeings(newValue: string): void;
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
    if (
      value.length < 10 ||
      !/^[0-9 ]+$/.test(value) ||
      parseInt(value) < 2000000000
    )
      return errorMessage;
  };

  return (
    <div>
      <label htmlFor="numberOfBeings">{label}</label>
      <input
        id="numberOfBeings"
        type="number"
        value={numberOfBeings}
        onChange={e => {
          const value = e.target.value;
          const errMessage = validate(value);
          setErrorMessage(errMessage);
          if (errMessage !== undefined) onChangeNumberOfBeings(value);
        }}
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default NumberOfBeings;
