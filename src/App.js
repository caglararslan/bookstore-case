import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import { ThemeProvider } from './context/ThemeContext';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Detail />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider>
        <div className="App">
          <RouterProvider router={router} />
        </div>
    </ThemeProvider>
  );
}

export default App;
