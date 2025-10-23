import React from "react"
import Root from "./Root"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import PageDetail from "./pages/PageDetail";

const router = createBrowserRouter([
{  
  path: "/",
  element: <Root />,
  children: [
    {
      path: "",
      element: <Home />,
    },
    {
      path: "page1",
      element: <Page1 />,
    },
    {
      path: "page2",
      element: <Page2 />,
    },
    {
      path: "page/:id",
      element: <PageDetail/>
    },
  ],
},
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App
