// src/App.test.js

import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app title element", () => {
    //App render function call must be made within the test call for
    //a test to recognize what to look for in the document
  render(<App />);
  const titleElement = screen.getByText(/React Posts Sharer/i);
  expect(titleElement).toBeInTheDocument();
});

test("renders app subtitle element", () => {
  render(<App />);
  const subtitleElement = screen.getByText(/Bad man rude boy/i);
  expect(subtitleElement).toBeInTheDocument();
});


