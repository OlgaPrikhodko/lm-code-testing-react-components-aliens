import { render, screen } from "@testing-library/react";
import W12MForm from "./W12MForm";
import userEvent from "@testing-library/user-event";

test("renders form element", () => {
  // we can hold onto the object returned from render()
  // this object has a container property that we can destructure and inspect
  const { container } = render(<W12MForm />);

  // the container is just a normal DOM element, so we can look at normal properties like '.firstChild'
  // for example, the firstChild of our container should be our form element
  expect(container.firstChild).toHaveClass("w12MForm");
});

//Creating an onSubmit mock and passing it as a prop won't work since the onSubmit callback is internal to the component and not a prop - you don't have access to it from the test.
// test(`Given rendered component,
// 			When submit button was pressed,
// 			Then called submit handler`, async () => {
//   const user = userEvent.setup();
//   const onSubmitMock = jest.fn();
//   render(<W12MForm onSubmit={onSubmitMock} />);

//   const button = screen.getByRole("button");
//   await user.click(button);

//   expect(onSubmitMock).toHaveBeenCalled();
// });

test(`Given rendered component, 
			When submit button was pressed,
			Then DisplayFormData component rendered`, async () => {
  render(<W12MForm />);

  const button = screen.getByRole("button");
  await userEvent.click(button);

  expect(screen.getByText(`Your entered Values:`)).toBeInTheDocument();

  expect(
    screen.getByText(
      `This is exteremely convincing arguments! Ok, lets look for another planet!`
    )
  ).toBeInTheDocument();
});

it(`Given rendered component ,
			When data in fields entered and submit button was pressed,
			Then DisplayFormData component rendered`, async () => {
  render(<W12MForm />);

  const inputSpeciesName = screen.getByRole("textbox", {
    name: "Species Name",
  });

  const inputPlanetsName = screen.getByRole("textbox", {
    name: "Planet Name",
  });

  const inputNumberOfBeings = screen.getByRole("spinbutton", {
    name: "Number Of Beings",
  });

  const inputWhatIs2plus2 = screen.getByRole("combobox", {
    name: "What is 2 + 2?",
  });

  const inputReasonForSparing = screen.getByRole("textbox", {
    name: "Reason for sparing",
  });

  expect(inputSpeciesName).toBeInTheDocument();
  expect(inputPlanetsName).toBeInTheDocument();
  expect(inputNumberOfBeings).toBeInTheDocument();
  expect(inputWhatIs2plus2).toBeInTheDocument();
  expect(inputReasonForSparing).toBeInTheDocument();

  await userEvent.type(inputSpeciesName, "humans");
  await userEvent.type(inputPlanetsName, "Mars");
  await userEvent.type(inputNumberOfBeings, "3000000000");
  await userEvent.selectOptions(inputWhatIs2plus2, "4");
  await userEvent.type(inputReasonForSparing, "We are really kind:)");

  const button = screen.getByRole("button");
  await userEvent.click(button);

  expect(
    screen.getByText(`humans, Mars, 300000000, 4, We are really kind:)`)
  ).toBeInTheDocument();
});
