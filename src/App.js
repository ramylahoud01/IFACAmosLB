import './App.css';
import Home from './components/Home/Home.js';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import AddNewsPage from './components/News/AddNewsPage.js';

import AddEventsPage from './components/Events/AddEventsPage.js'

const router = createBrowserRouter([
  {
    path: "*",
    element: <Home/>,
  },
  {
    path: "/admin/News",
    element: <AddNewsPage />,
  },
  {
    path: "/admin/Events",
    element: <AddEventsPage />,
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
