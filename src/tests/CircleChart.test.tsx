import { render, screen } from "@testing-library/react";
import CircleChart from "../app/components/CircleChart";

it("renders caption", () => {
  render(<CircleChart size={180} level={80} caption="javascript" />);

  const caption = screen.getByText("javascript");

  expect(caption).toBeVisible();
});

it("renders percentage with % char", () => {
  render(<CircleChart size={180} level={80} caption="javascript" />);

  const percentage = screen.getByText("80%");

  expect(percentage).toBeVisible();
});

it("renders component with correct size", () => {
  render(<CircleChart size={180} level={80} caption="javascript" />);

  const circleWrapper = screen.getByTestId("svg-wrapper");

  expect(circleWrapper).toHaveStyle({ width: "180px", height: "180px" });
});

it("throws an error if level is greater than 100", () => {
  // implement mock
  const spy = jest.spyOn(global.console, "error").mockImplementation(() => {});

  expect(() =>
    render(<CircleChart size={180} level={101} caption="javascript" />)
  ).toThrowError();

    expect(spy).toHaveBeenCalled();
    
  // mocking cleanup
  spy.mockRestore();
});
