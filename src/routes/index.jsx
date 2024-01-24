import { createBrowserRouter } from "react-router-dom";
import { publicRoutes } from "./public";
import { protectedRoutes } from "./protected";
import Layout from "layout/Layout";
import Landing from "pages/Landing/Landing";

const user = null;

const routes = user ? protectedRoutes : publicRoutes;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Landing /> }, ...routes],
  },
]);

export default router;
