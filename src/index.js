import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import ErrorPage from "./routes/Error";
import Body from "./routes/body";
import Shop from "./routes/Shop";
import About from "./routes/About";
import { Provider } from "react-redux";
import Store from "./redux/Store";
import Bill from "./routes/Bill";
import Payment from "./routes/Payment";
import Contact from "./routes/Contact";
let routers = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Body />,
      },
      {
        path: "shop",
        element: <Shop />,
      },

      {
        path: "bill",
        element: <Bill />,
      },
      {
        path: "pay",
        element: <Payment />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "report",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <RouterProvider router={routers} />
  </Provider>
);
