import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ReasonForSparing from "./ReasonForSparing";

describe("ReasonForSparing component", () => {
  it("GIVEN the component props WHEN component is rendered THEN label text should be rendered", () => {
    const props = {
      reasonForSparing: "",
      onChangeReasonOfSparing: jest.fn(),
    };
    render(<ReasonForSparing {...props} />);
    expect(screen.getByText("Reason for sparing")).toBeInTheDocument();
  });

  it("GIVEN the component props WHEN when component is rendered THEN value from props should be displayed", () => {
    const props = {
      reasonForSparing: "We are really kind",
      onChangeReasonOfSparing: jest.fn(),
    };
    render(<ReasonForSparing {...props} />);
    expect(screen.getByRole("textbox")).toHaveValue("We are really kind");
  });

  it("GIVEN the component props WHEN when onChange is called THEN value from props should be displayed", async () => {
    const mockOnChange = jest.fn();

    const props = {
      reasonForSparing: "",
      onChangeReasonOfSparing: mockOnChange,
    };
    render(<ReasonForSparing {...props} />);
    const textbox = screen.getByRole("textbox");
    await userEvent.type(textbox, "We are really kind:)");
    expect(mockOnChange).toHaveBeenCalled();
  });

  it(`Given rendered component 
      When the 'wrong' value is typed,
      Then errorMessage should be present`, async () => {
    const props = {
      reasonForSparing: "",
      onChangeReasonOfSparing: jest.fn(),
    };
    render(<ReasonForSparing {...props} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "1");
    expect(
      screen.getByText(`Must be between 17 and 153 characters`)
    ).toBeInTheDocument();
  });

  it(`Given rendered component 
      When the valid value is typed,
      Then errorMessage shouldn't be present`, async () => {
    const props = {
      reasonForSparing: "We are really kind:)".repeat(3),
      onChangeReasonOfSparing: jest.fn(),
    };
    render(<ReasonForSparing {...props} />);

    const input = screen.getByRole("textbox");
    await userEvent.type(input, "1");
    expect(
      screen.queryByText(`Must be between 17 and 153 characters`)
    ).not.toBeInTheDocument();
  });
});
