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
  return (
    <>
      {showData && (
        <div>
          <p>Entered Values:</p>
          {speciesName}, {planetName}, {numberOfBeings}, {whatIs2plus2},{" "}
          {reasonForSparing}
        </div>
      )}
    </>
  );
};
export default DisplayFormData;
