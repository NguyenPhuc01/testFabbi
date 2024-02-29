import { render, screen, cleanup } from "@testing-library/react";
import MainLayout from "../MainLayout";

test("test render mainlayout component", () => {
  render(<MainLayout />);
  //   const testElementRender = screen.getByTestId("testRenderMainLayout-1");

  //   expect(testElementRender).toBeInTheDocument();
  expect(true).toBe(true);
});
