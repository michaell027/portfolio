import "./App.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/homePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
