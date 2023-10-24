/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import MainDashboardBanner from "../components/Banners/MainDashboardBanner";
test(`find "Find Expert Button"`, () => {
  render(<MainDashboardBanner />);
  const btn = screen.getByTestId("FindingExpert");
  expect(btn).toBeInTheDocument();
});
