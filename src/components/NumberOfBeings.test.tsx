import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfBeings from "./NumberOfBeings";

describe("NumberOfBeings", () => {
  it("GIVEN the component props WHEN the component is rendered THEN label text should be rendered", () => {
    const props = {
      numberOfBeings: "10",
      onChangeNumberOfBeings: jest.fn(),
    };
    render(<NumberOfBeings {...props} />);
    expect(screen.getByText("Number Of Beings")).toBeInTheDocument();
  });

  it("GIVEN the props WHEN the component is rendered THEN value from props should be displayed", () => {
    const props = {
      numberOfBeings: "10",
      onChangeNumberOfBeings: jest.fn(),
    };
    render(<NumberOfBeings {...props} />);
    expect(screen.getByRole("textbox")).toHaveValue("10");
  });

  it("GIVEN component props WHEN onChange is called THEN onChangeNumberOfBeings should be called", async () => {
    const mockChange = jest.fn();
    const props = {
      numberOfBeings: "10",
      onChangeNumberOfBeings: mockChange,
    };
    render(<NumberOfBeings {...props} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();

    await userEvent.type(input, "22");
    expect(mockChange).toHaveBeenCalled();
  });

  it(`Given rendered component 
  When the 'wrong' value is typed,
  Then errorMessage should be present`, async () => {
    const props = {
      numberOfBeings: "",
      onChangeNumberOfBeings: jest.fn(),
    };
    render(<NumberOfBeings {...props} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "123");

    expect(
      screen.getByText(`Numbers ONLY. Must be at least 1,000,000,000`)
    ).toBeInTheDocument();
  });

  it(`Given rendered component 
  When the valid value is typed,
  Then errorMessage shouldn't be present`, () => {
    const props = {
      numberOfBeings: "2000000000",
      onChangeNumberOfBeings: jest.fn(),
    };
    render(<NumberOfBeings {...props} />);
    expect(
      screen.queryByText(`Numbers ONLY. Must be at least 1,000,000,000`)
    ).not.toBeInTheDocument();
  });
});
