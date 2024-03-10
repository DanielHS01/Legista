import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "./shared/Loading";
import ErrorPage from "./shared/ErrorPage";

const Layout = lazy(() => import("./landing/Layout"));
const Home = lazy(() => import("./landing/pages/Home"));
const Lawyers = lazy(() => import("./landing/pages/Lawyers"));
const Consultancies = lazy(() => import("./landing/pages/Consultancies"));
const Formats = lazy(() => import("./landing/pages/Formats"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/abogados",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Lawyers />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/asesorias",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Consultancies />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/formatos",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loading />}>
            <Formats />
          </Suspense>
        ),
      },
    ],
  },
]);
