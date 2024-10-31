import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this to add matchers like toBeInTheDocument
import Hero from "../components/hero";
import React from "react";

test("renders hero section with name and job title", () => {
  render(<Hero />);

  const nameElement = screen.getByTestId("heroName");
  expect(nameElement).toBeInTheDocument();

  const jobTitleElement = screen.getByTestId("heroJobTitle");
  expect(jobTitleElement).toBeInTheDocument();

  const descriptor = screen.getByTestId("heroDescription");
  expect(descriptor).toBeInTheDocument();
});

test("renders hero's social media links", () => {
  render(<Hero />);

  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();

  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
});

test("renders contact information", () => {
  render(<Hero />);

  const phoneElement = screen.getByText(/\+1 \(720\)-839-3268/i);
  expect(phoneElement).toBeInTheDocument();

  const emailElement = screen.getByText(/elledgecre@outlook.com/i);
  expect(emailElement).toBeInTheDocument();
});
