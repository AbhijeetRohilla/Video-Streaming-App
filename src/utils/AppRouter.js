import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import WatchPage from "../components/WatchPage";
import Body from "../components/Body";

export const appRouter=createBrowserRouter([
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

