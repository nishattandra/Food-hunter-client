import { createBrowserRouter } from "react-router-dom";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";



const router = createBrowserRouter([
    {
      path: "/",
      element: <NavigationBar></NavigationBar>,
    },
  ]);


  export default router