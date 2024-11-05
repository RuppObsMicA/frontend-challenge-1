import { createBrowserRouter } from "react-router-dom";
import BasicLayout from "./layout/BasicLayout";
import NotFoundPage from "./pages/error/NotFound";
import MainPage from "./pages/index";
import MRFFileList from "~/components/MRFFileList.tsx";

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
        element: <MRFFileList />,
      }
    ],
    errorElement: <NotFoundPage />,
  },
]);

export default router;
