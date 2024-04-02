import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import VideoContainer from "./components/VideoContainer";
import SearchList from "./components/SearchList";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import Watch from "./components/Watch";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
            children: [
              {
                path: "/",
                element: <VideoContainer />,
              }
            ],
          },
          {
            path: "/watch",
            element: <Watch />,
          },
              {
                path: "/search",
                element: <SearchList />,
              },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
