import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: "home" }],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
