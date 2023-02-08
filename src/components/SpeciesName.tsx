import { useState } from "react";

interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName(e: React.ChangeEvent<HTMLInputElement>): void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );
  const label = "Species Name";

  const validate: (value: string) => string | undefined = value => {
    const errorMessage = `Must be between 3 and 23 characters. No numbers or special characters allowed!`;
    if (value.length < 3 || value.length > 23 || !/^[a-zA-Z ]+$/.test(value))
      return errorMessage;

    return undefined;
  };

  return (
    <div>
      <label htmlFor="speciesName">{label}</label>
      <input
        type="text"
        value={speciesName}
        onChange={e => {
          const errorMessage = validate(e.target.value);
          setErrorMessage(errorMessage);
          onChangeSpeciesName(e);
        }}
        id="speciesName"
      />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default SpeciesName;
