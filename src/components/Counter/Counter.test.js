/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";
import Counter from "./Counter";

describe("Counter", () => {
  beforeEach(() => {
    console.log("beforeEach");
  });

  afterEach(() => {
    console.log("afterEach");
  });

  it("counter displays initial value", () => {
    const { getByTestId } = render(<Counter initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);

    expect(countValue).toEqual(0);
  });

  it("should increment by one if btn is clicked once", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole("button", { name: "+" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);

    fireEvent.click(incrementBtn);

    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(1);
  });

  it("should increment by one if btn is clicked twice", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const incrementBtn = getByRole("button", { name: "+" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(2);
  });

  it("should decrement by one if btn is clicked once", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementBtn = getByRole("button", { name: "-" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);

    fireEvent.click(decrementBtn);

    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-1);
  });

  it("should decrement by twice if btn is clicked twice", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={0} />);
    const decrementBtn = getByRole("button", { name: "-" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);

    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(-2);
  });

  it("should restart to zero if btn is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initialCount={20} />);
    const decrementBtn = getByRole("button", { name: "Restart" });
    expect(Number(getByTestId("count").textContent)).toEqual(20);
    fireEvent.click(decrementBtn);

    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });

  it("should trigger alert function when btn is clicked", () => {
    const mockHandler = jest.fn();

    const { getByTestId, getByRole } = render(
      <Counter initialCount={20} foo={mockHandler} />
    );
    const alertBtn = getByRole("button", { name: "Alert" });
    expect(Number(getByTestId("count").textContent)).toEqual(20);

    fireEvent.click(alertBtn);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
