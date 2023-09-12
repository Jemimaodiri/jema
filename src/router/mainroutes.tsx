import React from "react"
import {createBrowserRouter} from "react-router-dom"
import Layout from "../Common/Layout"
import Homescreen from "../pages/Homescreen"
export const mainroutes=createBrowserRouter([
         {
                  path:'/',
                  element:<Layout/>,
                  children:[
                           {
                           index:true,
                           element:<Homescreen/>
                           }
                  ]
         }
])


