//Homo sapiens
import { render, screen } from "@testing-library/react";
import SpeciesName from "./SpeciesName";

describe("SpeciesName component", () => {
  it("GIVEN the component props THEN when component is rendered THEN label text should be rendered", () => {
    const props = {
      speciesName: "",
      onChangeSpeciesName: jest.fn(),
    };
    render(<SpeciesName {...props} />);
    const labelText = screen.getByText("Species Name");
    expect(labelText).toBeInTheDocument();
  });
});
