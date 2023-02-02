interface PlanetNameProps {
  planetName: string;
  onChangePlanetName(e: React.ChangeEvent<HTMLInputElement>): void;
}

const PlanetName: React.FC<PlanetNameProps> = ({
  planetName,
  onChangePlanetName,
}) => {
  const label = "Planet Name";
  return (
    <div>
      <label htmlFor="planetName">{label}</label>
      <input type="text" value={planetName} onChange={onChangePlanetName} />
    </div>
  );
};

export default PlanetName;
