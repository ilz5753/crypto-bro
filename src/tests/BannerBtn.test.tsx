/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import BannerBtn from "../components/Micro/BannerBtn";

test("renders a BannerBtn with text", () => {
  render(<BannerBtn text="Click Me" />);
  const button = screen.getByText("Click Me");
  expect(button).toBeInTheDocument();
});

test("disables the button when disabled prop is true", () => {
  render(<BannerBtn text="Click Me" disabled={true} />);
  const button = screen.getByText("Click Me");
  expect(button).toBeDisabled();
});

test("calls the onClick function when the button is clicked", () => {
  const onClickMock = jest.fn();
  render(<BannerBtn text="Click Me" onClick={onClickMock} />);
  const button = screen.getByText("Click Me");
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalled();
});

test("adds data-testid attribute to the button", () => {
  render(<BannerBtn text="Click Me" dataTestId="custom-test-id" />);
  const button = screen.getByTestId("custom-test-id");
  expect(button).toBeInTheDocument();
});

test("applies the appropriate styles when not disabled", () => {
  render(<BannerBtn text="Click Me" />);
  const button = screen.getByText("Click Me");
  expect(button).toHaveClass("cursor-pointer");
  expect(button).not.toHaveClass("cursor-not-allowed");
});

test("applies the appropriate styles when disabled", () => {
  render(<BannerBtn text="Click Me" disabled={true} />);
  const button = screen.getByText("Click Me");
  expect(button).toHaveClass("cursor-not-allowed");
  expect(button).toHaveClass("opacity-50");
});
