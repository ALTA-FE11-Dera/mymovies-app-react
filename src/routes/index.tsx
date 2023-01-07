import { Component, ReactNode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "../pages";
import DetailMovie from "../pages/DetailMovie";
import ListFavMovie from "../pages/ListFavMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/movie/:id_movie",
    element: <DetailMovie />,
  },
  {
    path: "/favorite",
    element: <ListFavMovie />,
  },
]);

class App extends Component {
  render() {
    return <RouterProvider router={router} />;
  }
}

export default App;
