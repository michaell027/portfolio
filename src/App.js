import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/homePage";
import ComingSoonPage from "./pages/comingSoonPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ComingSoonPage/>,
    },
    {
        path: "/home",
        element: <HomePage/>,
    }
  ]);
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
