import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonOfSparing(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonOfSparing,
}) => {
  const label = "Reason for sparing";
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const validate: (value: string) => string | undefined = value => {
    const errorMessage = `Must be between 17 and 153 characters`;
    if (value.length < 17 || value.length > 153) return errorMessage;

    return undefined;
  };
  return (
    <div>
      <label htmlFor="reasonForSparing">{label}</label>
      <textarea
        name="reasonForSparing"
        value={reasonForSparing}
        onChange={e => {
          const errMessage = validate(e.target.value);
          setErrorMessage(errMessage);
          onChangeReasonOfSparing(e);
        }}
      ></textarea>
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default ReasonForSparing;
