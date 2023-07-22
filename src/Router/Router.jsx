import { createBrowserRouter } from "react-router-dom";
import Mani from "../Layout/Mani";
import Home from "../page/Home/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Mani></Mani>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
      ]
    },
  ]);

export default router