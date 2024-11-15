import { createBrowserRouter } from "react-router-dom";
import Main from "../../Components/Main/Main";
import Home from "../../Pages/Home/Home";
import { createElement } from "react";
import Stock from "../../Components/Stock/Stock";

export const Router = createBrowserRouter([
  {
    path: "/home",
    element: createElement(Home),
  },
  {
    path: "/main",
    element: createElement(Main),
  },
  {
    path: "/Chart/:name",
    element: createElement(Stock),
  },
]);

export default Router;
