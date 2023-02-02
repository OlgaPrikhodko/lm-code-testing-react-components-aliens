interface NumberOfBeingsProps {
  numberOfBeings: string;
  onChangeNumberOfBeings(e: React.ChangeEvent<HTMLInputElement>): void;
}

const NumberOfBeings: React.FC<NumberOfBeingsProps> = ({
  numberOfBeings,
  onChangeNumberOfBeings,
}) => {
  const label = "Number Of Beings";

  return (
    <div>
      <label htmlFor="numberOfBeings">{label}</label>
      <input
        type="text"
        value={numberOfBeings}
        onChange={onChangeNumberOfBeings}
      />
    </div>
  );
};

export default NumberOfBeings;
