import {
  createBrowserRouter,
} from "react-router";
import RootLayOuts from "../Layouts/RootLayOuts";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Authlayout from "../Layouts/Authlayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllPackeges from "../pages/AllPackeges/AllPackeges";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import PrivateRoute from "../provider/PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOuts,
     children: [
      {
        index: true,
        Component: Home,
      },
      {
    path:"/jobs/:id",
    element: <PrivateRoute>
      <ViewDetails> </ViewDetails>
    </PrivateRoute>,
    loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
    

  },
        {
    path:"/allpackages",
    element:<AllPackeges></AllPackeges>,
    

  },
    
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