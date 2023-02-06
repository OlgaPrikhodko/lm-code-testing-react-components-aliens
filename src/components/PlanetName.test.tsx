import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PlanetName from "./PlanetName";

describe("PlanetName component tests", () => {
  it("given the planetName props when the component is rendered then label text should be rendered", () => {
    const planetNameProps = {
      planetName: "",
      onChangePlanetName: jest.fn(),
    };
    render(<PlanetName {...planetNameProps} />);

    const labelText = screen.getByLabelText("Planet Name");
    expect(labelText).toBeInTheDocument();
  });

  it("given the planetName props when the component is rendered then value from props should displayed", () => {
    const planetNameProps = {
      planetName: "Mars",
      onChangePlanetName: jest.fn(),
    };
    render(<PlanetName {...planetNameProps} />);

    expect(screen.getByRole("textbox")).toHaveValue("Mars");
  });

  it("GIVEN the planetName props WHEN onChange is called SHOULD be called onChangePlanetName", async () => {
    const mockChange = jest.fn();
    const planetNameProps = {
      planetName: "",
      onChangePlanetName: mockChange,
    };
    render(<PlanetName {...planetNameProps} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue("");

    const user = userEvent.setup();
    await user.type(input, "Mars");
    expect(mockChange).toHaveBeenCalled();
  });
});
