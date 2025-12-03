import React from 'react'
import Head from './components/Head'
import Body from './components/Body'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
// import {appRouter} from './utils/AppRouter'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const appRouter=createBrowserRouter([
    {path:"/",
        element:<Body/>,
        children:[
            {
                path:"/",
                element:<MainContainer/>
            },
            {
                path:"watch",
                element:<WatchPage/>
            }
        ]        
    },    
])

function App() {
  return (
    <div>    
      <Head/>      
      <RouterProvider router={appRouter}/>      
    </div>
  )
}

export default App
