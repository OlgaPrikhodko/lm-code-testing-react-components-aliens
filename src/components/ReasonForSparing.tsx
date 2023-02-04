interface ReasonForSparingProps {
  reasonForSparing: string;
  onChangeReasonOfSparing(e: React.ChangeEvent<HTMLTextAreaElement>): void;
}

const ReasonForSparing: React.FC<ReasonForSparingProps> = ({
  reasonForSparing,
  onChangeReasonOfSparing,
}) => {
  const label = "Reason for sparing";
  return (
    <div>
      <label htmlFor="reasonForSparing">{label}</label>
      <textarea
        name="reasonForSparing"
        value={reasonForSparing}
        onChange={onChangeReasonOfSparing}
      ></textarea>
    </div>
  );
};

export default ReasonForSparing;
