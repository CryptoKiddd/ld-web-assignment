import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootPage from "./Pages/RootPage/RootPage";
import ErrorPage from "./Pages/ErrorPage";
import DashboardPage from "./Pages/DashBoardPage/DashboardPage";
import PersonalBoardPage from "./Pages/PersonalBoardPage/PersonalBoardPage";

import "./App.css";
import Members from "./Components/Members/Members";
import PersonalBoardInfo from "./Components/PersonalBoardInfo/PersonalBoardInfo";
import ObjectivesPage from "./Pages/ObjectivesPage/ObjectivesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
        index:true
      },
      {
        path: "projectOjectives",
        element: <ObjectivesPage />,
        index:true
      },
      {
        path: "personalboard",
        element: <PersonalBoardPage />,
        children:[
          {
            path: "personalboard/info",
            index:true,
            element: <PersonalBoardInfo />,
          },
          {
            path: "personalboard/members",
            element: <Members />,
          },
        ]
      },
      
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
