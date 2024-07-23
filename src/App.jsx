import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NewEntry from "./Pages/newEntry"
import ShowEntries from "./Pages/ShowEntries"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/NewEntry",
    element: <NewEntry />,
  },
  {
    path: "/ShowEntries",
    element: <ShowEntries />,
  },
 
  {
    path: "/Contact",
    element: <Contact />,
  },
  
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
