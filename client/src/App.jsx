import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
