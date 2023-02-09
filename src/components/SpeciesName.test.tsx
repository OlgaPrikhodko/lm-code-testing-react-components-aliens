import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SpeciesName from "./SpeciesName";

describe("SpeciesName component", () => {
  it("GIVEN the component props WHEN component is rendered THEN label text should be rendered", () => {
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
      speciesName: "",
      onChangeSpeciesName: mockOnChange,
    };
    render(<SpeciesName {...props} />);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Homo sapiens");
    expect(mockOnChange).toHaveBeenCalled();
  });

  it(`Given rendered component 
  When the 'wrong' value is typed,
  Then errorMessage should be present`, async () => {
    const props = {
      speciesName: "",
      onChangeSpeciesName: jest.fn(),
    };
    render(<SpeciesName {...props} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "123");
    expect(
      screen.getByText(
        `Must be between 3 and 23 characters. No numbers or special characters allowed!`
      )
    ).toBeInTheDocument();
  });

  it(`Given rendered component 
  When the valid value is typed,
  Then errorMessage shouldn't be present`, () => {
    const props = {
      speciesName: "humans",
      onChangeSpeciesName: jest.fn(),
    };
    render(<SpeciesName {...props} />);

    const errMessage = screen.queryByText(
      `Must be between 3 and 23 characters. No numbers or special characters allowed!`
    );

    expect(errMessage).not.toBeInTheDocument();
  });
});
