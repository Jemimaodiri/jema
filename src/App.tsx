import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { mainroutes } from './router/mainroutes'

const App = () => {
  return (
    <div>
         <RouterProvider router={mainroutes}/>
    </div>
  )
}

export default App