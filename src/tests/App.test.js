import { render, screen } from "@testing-library/react";
import App from "../App";
import React, { act } from "react";
import { createMemoryRouter, Navigate, RouterProvider } from "react-router-dom";
import HomePage from "../pages/homePage";

test("loads home page", async () => {
  render(<App />);
  expect(screen.getByText(/WELCOME TO MY PORTFOLIO/)).toBeInTheDocument();
});

test("redirects to home page when navigating to an unknown route", () => {
  const routes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];

  const router = createMemoryRouter(routes, {
    initialEntries: ["/unknown"],
  });

  render(<RouterProvider router={router} />);

  expect(screen.getByText(/WELCOME TO MY PORTFOLIO/)).toBeInTheDocument();
});

test("after click to menu button, renders menu options", () => {
  render(<App />);
  const menuButton = screen.getAllByTestId("menu-button")[0];
  menuButton.click();

  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("About")).toBeInTheDocument();
  expect(screen.getByText("Education")).toBeInTheDocument();
  expect(screen.getByText("Contact")).toBeInTheDocument();
  expect(screen.getByText("Skills")).toBeInTheDocument();
  expect(screen.getByText("Projects")).toBeInTheDocument();
});

test("after click on home menu option, renders home page", () => {
  render(<App />);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    const menuButton = screen.getAllByTestId("menu-button")[0];
    menuButton.click();
    const homeOption = screen.getByText("Home");
    homeOption.click();
  });

  expect(screen.getByText(/WELCOME TO MY PORTFOLIO/)).toBeInTheDocument();
});

test("after click on about menu option, renders about page", () => {
  render(<App />);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    const menuButton = screen.getAllByTestId("menu-button")[0];
    menuButton.click();
    const aboutOption = screen.getByText("About");
    aboutOption.click();
  });

  expect(screen.getByText("Michaela Majorošová")).toBeInTheDocument();
});

test("after click on education menu option, renders education page", () => {
  render(<App />);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    const menuButton = screen.getAllByTestId("menu-button")[0];
    menuButton.click();
    const educationOption = screen.getByText("Education");
    educationOption.click();
  });

  expect(
    screen.getByText("Košická akadémia softvérového vývoja"),
  ).toBeInTheDocument();
  expect(
    screen.getByText("Gymnázium sv. Tomáša Akvinského"),
  ).toBeInTheDocument();
});

test("after click on contact menu option, renders contact page", () => {
  render(<App />);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    const menuButton = screen.getAllByTestId("menu-button")[0];
    menuButton.click();
    const contactOption = screen.getByText("Contact");
    contactOption.click();
  });

  expect(screen.getByText("GET")).toBeInTheDocument();
  expect(screen.getByText("IN TOUCH")).toBeInTheDocument();
});

test("after click on skills menu option, renders skills page", () => {
  render(<App />);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    const menuButton = screen.getAllByTestId("menu-button")[0];
    menuButton.click();
    const skillsOption = screen.getByText("Skills");
    skillsOption.click();
  });

  expect(screen.getByText("What I do:")).toBeInTheDocument();
});

test("after click on projects menu option, renders projects page", () => {
  render(<App />);

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    const menuButton = screen.getAllByTestId("menu-button")[0];
    menuButton.click();
    const projectsOption = screen.getByText("Projects");
    projectsOption.click();
  });

  expect(screen.getByText("Verejnosť proti")).toBeInTheDocument();
  expect(screen.getByText("Sit'nserve")).toBeInTheDocument();
});
