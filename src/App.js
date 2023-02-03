import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PageDatas from "./pages/PageDatas";
import { LightModeProvider } from "./context/LightModeContext";
import RootLayout from "./pages/RootLayout";
import Error from "./components/error/Error";
import clientApi from "./services/clientApi";
import data from "./data";

const pages = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/:pathName",
        element: <PageDatas />,
        loader: async ({ params }) => {
          return [
            await clientApi(`${params.pathName}-api`),
            data[params.pathName].title,
            data[params.pathName].desc,
          ];
        },
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <LightModeProvider>
      <RouterProvider router={pages} />
    </LightModeProvider>
  );
}

export default App;
