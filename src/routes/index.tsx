import { useState, useMemo, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "../pages";
import DetailMovie from "../pages/DetailMovie";
import ListFavMovie from "../pages/ListFavMovie";

import { ThemeContext } from "../utils/context";

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

const App = () => {
  const [theme, setTheme] = useState("light");
  const background = useMemo(() => ({ theme, setTheme }), [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={background}>
      <RouterProvider router={router} />
    </ThemeContext.Provider>
  );
};

export default App;
