import "./App.css";
import Home from "./components/Home/Home.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNewsPage from "./components/News/AddNewsPage.js";

import AddEventsPage from "./components/Events/AddEventsPage.js";
import LoginPage from "./components/Login/LoginPage.js";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/admin/News",
    element: <AddNewsPage />,
  },
  {
    path: "/admin/Events",
    element: <AddEventsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
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
