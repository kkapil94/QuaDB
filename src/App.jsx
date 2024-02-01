import "./App.css";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Movie from "./pages/Movie";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie",
        element: <Movie />,
        children: [
          {
            path: ":id",
            element: <Movie />,
          },
        ],
      },
    ],
  },
]);

export default router;
