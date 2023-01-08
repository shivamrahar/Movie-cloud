import React from 'react'
import { createBrowserRouter,RouterProvider,router} from "react-router-dom"
import Home from './Home'
import Signup from './Signup'
import Profile from './Profile'
import Xyz from './Xyz'
import Main from './Main'

   let Abc=createBrowserRouter([{
    path:"/Home",
    element:<Main/>
   },{
    path:"/Signup",
    element:<Signup/>
   },
{
    path:"/Profile",
    element:<Profile/>
}])
const Routing=()=>{
    return<RouterProvider router={Abc}/>
}
export default Routing