import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";
import "./App.css";
import { CheckUserExist } from "./helper/helper";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/quiz",
    element: (
      <CheckUserExist>
        <Quiz />
      </CheckUserExist>
    ),
  },
  {
    path: "/result",
    element: (
      <CheckUserExist>
        <Result />
      </CheckUserExist>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
