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
import BookNow from "../pages/BookNow/BookNow";
import PackagesAdd from "../pages/PackagesAdd/PackagesAdd";
import ManagePackeges from "../pages/ManagePackeges/ManagePackeges";


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
    path:"/jobApply/:id",
    element: <PrivateRoute>
      <BookNow></BookNow>
    </PrivateRoute>

  },




        {
    path:"/allpackages",
    element:<AllPackeges></AllPackeges>,
    
    

  },
      {
    path:"/addpackage",
    element:<PrivateRoute>
      <PackagesAdd></PackagesAdd>
    </PrivateRoute>,
    
    

  },
  {
    path:"//myPostedJobs",
    element:<PrivateRoute>
      <ManagePackeges></ManagePackeges>
    </PrivateRoute>,
    
    

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