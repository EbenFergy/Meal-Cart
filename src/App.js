import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home/Home";

const App = () => {
  const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);

  return <RouterProvider router={router} />;
};

export default App;
