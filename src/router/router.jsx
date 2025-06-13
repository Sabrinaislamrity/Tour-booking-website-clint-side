import {
  createBrowserRouter,
} from "react-router";
import RootLayOuts from "../Layouts/RootLayOuts";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Authlayout from "../Layouts/Authlayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOuts,
     children: [
      {
        index: true,
        Component: Home,
      }
     ]
  },
  {
        path:"/auth",
        element: <Authlayout></Authlayout>,
        children: [

            {
                path:"/auth/login",
                element:<Login></Login>,
            },
            {
                path:"/auth/register",
                element: <Register></Register>,
            },
        ]
    },
  
    
       {
        path:"/*",
        element:<Error></Error>
    },
]);


export default router;