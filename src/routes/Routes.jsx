import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Recipes from "../pages/Recipes/Recipes";
import { FaTimesCircle } from "react-icons/fa";
import PrivateRoutes from "./PrivateRoutes";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element: <Home></Home>,
          loader: ()=> fetch('http://localhost:5000/chefs/')
        },
        {
          path: "/blog",
          element: <PrivateRoutes><Blog></Blog></PrivateRoutes>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element:<Register></Register>
        },
        {
          path:"/chef/:id",
          element:<PrivateRoutes><Recipes></Recipes></PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/chefs/${params.id}`)
        }
      ]
    },
  ]);


  export default router