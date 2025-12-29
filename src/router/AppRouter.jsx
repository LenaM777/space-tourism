import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Crew from "../pages/Crew/Crew";
import Destination from "../pages/Destination/Destination";
import Technology from "../pages/Technology/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/crew", element: <Crew /> },
      { path: "/destination", element: <Destination /> },
      { path: "/technology", element: <Technology /> },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
