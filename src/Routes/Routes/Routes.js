import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import Apoientment from "../../Pages/Home/Apoientment/Apoientment";
import Contact from "../../Pages/Home/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/apoientment",
        element: <Apoientment></Apoientment>,
      },
      {
        path: "/contactus",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
