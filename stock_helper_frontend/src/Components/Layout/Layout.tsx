import React from "react";
import { RouterProvider } from "react-router-dom";
import Router from "../../utils/router/Router";

const Layout: React.FC = () => {
  return <RouterProvider router={Router} />;
};

export default Layout;
