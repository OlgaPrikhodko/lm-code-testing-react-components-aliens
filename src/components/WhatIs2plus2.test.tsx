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

  it("GIVEN the componet props WHEN component onChange is called THEN the value from props should be displayed", async () => {
    const mockFunc = jest.fn();
    const props = {
      whatIs2plus2: "4" as Answer,
      setWhatIs2plus2: mockFunc,
    };
    render(<WhatIs2plus2 {...props} />);

    const combobox = screen.getByRole("combobox");
    await userEvent.selectOptions(combobox, "Not 4");
    expect(mockFunc).toHaveBeenCalled();
  });

  it(`Given rendered component 
  When invalid value is typed,
  Then errorMessage should be present`, async () => {
    const props = {
      whatIs2plus2: "4" as Answer,
      setWhatIs2plus2: jest.fn(),
    };

    render(<WhatIs2plus2 {...props} />);
    const combobox = screen.getByRole("combobox");
    await userEvent.selectOptions(combobox, "Not 4");
    expect(screen.getByText(`This is not corect value!`)).toBeInTheDocument();
  });

  it(`Given rendered component 
  When the valid value is typed,
  Then errorMessage shouldn't be present`, async () => {
    const props = {
      whatIs2plus2: "4" as Answer,
      setWhatIs2plus2: jest.fn(),
    };

    render(<WhatIs2plus2 {...props} />);
    const combobox = screen.getByRole("combobox");
    await userEvent.selectOptions(combobox, "4");
    expect(
      screen.queryByText(`This is not corect value!`)
    ).not.toBeInTheDocument();
  });
});
