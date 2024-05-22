import { render, screen } from "@testing-library/react";
import App from "../App";
import React from "react";
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
