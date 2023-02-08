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
      reasonForSparing: "We are really kind",
      onChangeReasonOfSparing: mockOnChange,
    };
    render(<ReasonForSparing {...props} />);
    const textbox = screen.getByRole("textbox");
    await userEvent.type(textbox, "We are really kind");
    expect(mockOnChange).toHaveBeenCalled();
  });
});
