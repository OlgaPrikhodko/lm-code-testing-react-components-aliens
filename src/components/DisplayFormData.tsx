interface DisplayFormDataProps {
  showData: boolean;
  speciesName: string;
  planetName: string;
  numberOfBeings: string;
  whatIs2plus2: string;
  reasonForSparing: string;
}

const DisplayFormData: React.FC<DisplayFormDataProps> = ({
  showData,
  speciesName,
  planetName,
  numberOfBeings,
  whatIs2plus2,
  reasonForSparing,
}) => {
  const resultCollection = `${speciesName}, ${planetName}, ${numberOfBeings}, ${whatIs2plus2}, ${reasonForSparing}`;
  return (
    <>
      {showData && (
        <div>
          <p>Your entered Values:</p>
          {resultCollection}
          <p>
            This is exteremely convincing arguments! Ok, lets look for another
            planet!
          </p>
        </div>
      )}
    </>
  );
};
export default DisplayFormData;
