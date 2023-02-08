import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import WhatIs2plus2 from "./WhatIs2plus2";
import { Answer } from "./WhatIs2plus2";

describe("WhatIs2plus2", () => {
  it("GIVEN the componet props WHEN component is rendered THEN label text should be rendered", () => {
    const props = {
      whatIs2plus2: "4" as Answer,
      setWhatIs2plus2: jest.fn(),
    };

    render(<WhatIs2plus2 {...props} />);
    expect(screen.getByText("What is 2 + 2?")).toBeInTheDocument();
  });

  it("GIVEN the componet props WHEN component is rendered THEN the value from props should be displayed", () => {
    const props = {
      whatIs2plus2: "Not 4" as Answer,
      setWhatIs2plus2: jest.fn(),
    };
    render(<WhatIs2plus2 {...props} />);
    expect(screen.getByRole("combobox")).toHaveValue("Not 4");
  });

  it("GIVEN the componet props WHEN component onChange is called THEN the value from props should be displayed", async () => {
    const props = {
      whatIs2plus2: "4" as Answer,
      setWhatIs2plus2: jest.fn(),
    };
    render(<WhatIs2plus2 {...props} />);

    const combobox = screen.getByRole("combobox");
    await userEvent.selectOptions(combobox, "Not 4");

    // expect(combobox).toHaveValue("Not 4");
    expect((screen.getByText("4") as HTMLOptionElement).selected).toBeFalsy();
    expect(
      (screen.getByText("Not 4") as HTMLOptionElement).selected
    ).toBeTruthy();
  });
});
