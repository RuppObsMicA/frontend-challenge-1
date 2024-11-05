import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "./layout/BasicLayout";
import NotFoundPage from "./pages/error/NotFound";
import MainPage from "./pages/index";
import FilesList from "~/pages/filesList.tsx";
import ApprovedClaims from "~/pages/approvedClaims.tsx";

const router = createBrowserRouter([
  {
    element: <BasicLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/files",
        element: <FilesList />,
      },
      {
        path: "/approve-claim",
        element: <ApprovedClaims />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
