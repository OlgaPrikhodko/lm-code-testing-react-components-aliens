import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SpeciesName from "./SpeciesName";

describe("SpeciesName component", () => {
  it("GIVEN the component props WHEN when component is rendered THEN label text should be rendered", () => {
    const props = {
      speciesName: "",
      onChangeSpeciesName: jest.fn(),
    };
    render(<SpeciesName {...props} />);
    const labelText = screen.getByText("Species Name");
    expect(labelText).toBeInTheDocument();
  });

  it("GIVEN the component props WHEN when component is rendered THEN value from props should be displayed", () => {
    const props = {
      speciesName: "Homo sapiens",
      onChangeSpeciesName: jest.fn(),
    };
    render(<SpeciesName {...props} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("Homo sapiens");
  });

  it("GIVEN the component props WHEN when onChange is called THEN value from props should be displayed", async () => {
    const mockOnChange = jest.fn();
    const props = {
      speciesName: "Homo sapiens",
      onChangeSpeciesName: mockOnChange,
    };
    render(<SpeciesName {...props} />);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Homo sapiens");
    expect(input).toHaveValue("Homo sapiens");
    expect(mockOnChange).toHaveBeenCalled();
    expect(mockOnChange).toHaveBeenCalledWith("Homo sapiens");
  });
});
