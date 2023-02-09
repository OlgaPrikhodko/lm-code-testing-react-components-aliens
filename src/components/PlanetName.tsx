import { useState } from "react";
import ErrorMessage from "./ErrorMessage";

interface PlanetNameProps {
  planetName: string;
  onChangePlanetName(newValue: string): void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => {
  const label = "Planet Name";
  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined
  );

  const validate: (value: string) => string | undefined = value => {
    const errorMessage = `Must be between 2 and 49 characters. Numbers are allowed, but no special characters.`;
    if (value.length < 2 || value.length > 49 || !/^[a-zA-Z0-9 ]+$/.test(value))
      return errorMessage;

    return undefined;
  };

  return (
    <div>
      <label htmlFor="planetName">{label}</label>
      <input
        type="text"
        value={planetName}
        onChange={e => {
          const errMessage = validate(e.target.value);
          setErrorMessage(errMessage);
          onChangePlanetName(e.target.value);
        }}
        id="planetName"
      />
      <ErrorMessage errorMessage={errorMessage} />
    </div>
  );
};

export default PlanetName;
