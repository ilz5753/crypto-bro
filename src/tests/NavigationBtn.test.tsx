/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";
import NavigationBtn from "../components/Micro/NavigationBtn";
let text = "Hello";
test(`Rendering NavigationBtn`, () => {
  render(<NavigationBtn {...{ text }} />);
  let btn = screen.getByText(text);
  expect(btn).toBeInTheDocument();
  expect(btn).toHaveClass("bg-gray-500");
  expect(btn).toHaveClass("cursor-pointer");
});
test(`Filled Danger NavigationBtn`, () => {
  render(<NavigationBtn {...{ text, danger: true }} />);
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("bg-error");
  expect(btn).toHaveClass("text-white");
  expect(btn).toHaveClass("cursor-pointer");
});
test(`Outlined Danger NavigationBtn`, () => {
  render(<NavigationBtn {...{ text, danger: true, outline: true }} />);
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("text-error");
  expect(btn).toHaveClass("cursor-pointer");
});
test(`Filled Active NavigationBtn`, () => {
  render(<NavigationBtn {...{ text, active: true }} />);
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("bg-primary-800");
  expect(btn).toHaveClass("text-white");
  expect(btn).toHaveClass("cursor-pointer");
});
test(`Outlined Active NavigationBtn`, () => {
  render(<NavigationBtn {...{ text, active: true, outline: true }} />);
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("text-primary-800");
  expect(btn).toHaveClass("cursor-pointer");
});
test(`Filled Is Hovered NavigationBtn`, () => {
  render(<NavigationBtn {...{ text, isHovered: true }} />);
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("bg-primary-900");
  expect(btn).toHaveClass("text-white");
  expect(btn).toHaveClass("cursor-pointer");
});
test(`Outlined Is Hovered NavigationBtn`, () => {
  render(<NavigationBtn {...{ text, isHovered: true, outline: true }} />);
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("text-primary-900");
  expect(btn).toHaveClass("cursor-pointer");
});
test(`Outlined Reset State NavigationBtn`, () => {
  render(<NavigationBtn {...{ text, outline: true }} />);
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("text-gray-500");
  expect(btn).toHaveClass("cursor-pointer");
});
test(`Disabled Filled Danger NavigationBtn`, () => {
  render(<NavigationBtn {...{ text, danger: true, disabled: true }} />);
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("bg-error");
  expect(btn).toHaveClass("text-white");
  expect(btn).toHaveClass("opacity-50");
  expect(btn).toHaveClass("cursor-not-allowed");
});
test(`Disabled Outlined Danger NavigationBtn`, () => {
  render(
    <NavigationBtn {...{ text, danger: true, outline: true, disabled: true }} />
  );
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("text-error");
  expect(btn).toHaveClass("opacity-50");
  expect(btn).toHaveClass("cursor-not-allowed");
});
test(`Disabled Filled Active NavigationBtn`, () => {
  render(<NavigationBtn {...{ text, active: true, disabled: true }} />);
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("bg-primary-800");
  expect(btn).toHaveClass("text-white");
  expect(btn).toHaveClass("opacity-50");
  expect(btn).toHaveClass("cursor-not-allowed");
});
test(`Disabled Outlined Active NavigationBtn`, () => {
  render(
    <NavigationBtn {...{ text, active: true, outline: true, disabled: true }} />
  );
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("text-primary-800");
  expect(btn).toHaveClass("opacity-50");
  expect(btn).toHaveClass("cursor-not-allowed");
});
test(`Disabled Filled Is Hovered NavigationBtn`, () => {
  render(<NavigationBtn {...{ text, isHovered: true, disabled: true }} />);
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("bg-primary-900");
  expect(btn).toHaveClass("text-white");
  expect(btn).toHaveClass("opacity-50");
  expect(btn).toHaveClass("cursor-not-allowed");
});
test(`Disabled Outlined Is Hovered NavigationBtn`, () => {
  render(
    <NavigationBtn
      {...{ text, isHovered: true, outline: true, disabled: true }}
    />
  );
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("text-primary-900");
  expect(btn).toHaveClass("opacity-50");
  expect(btn).toHaveClass("cursor-not-allowed");
});
test(`Disabled Outlined Reset State NavigationBtn`, () => {
  render(<NavigationBtn {...{ text, outline: true, disabled: true }} />);
  let btn = screen.getByText(text);
  expect(btn).toHaveClass("text-gray-500");
  expect(btn).toHaveClass("opacity-50");
  expect(btn).toHaveClass("cursor-not-allowed");
});
test(`NavigationBtn with test id: "${text}"`, () => {
  render(<NavigationBtn {...{ text, dataTestId: text }} />);
  let btn = screen.getByTestId(text);
  expect(btn).toBeInTheDocument();
});
