interface SpeciesNameProps {
  speciesName: string;
  onChangeSpeciesName(e: React.ChangeEvent<HTMLInputElement>): void;
}

const SpeciesName: React.FC<SpeciesNameProps> = ({
  speciesName,
  onChangeSpeciesName,
}) => {
  const label = "Species Name";

  return (
    <div>
      <label htmlFor="speciesName">{label}</label>
      <input type="text" value={speciesName} onChange={onChangeSpeciesName} />
    </div>
  );
};

export default SpeciesName;
