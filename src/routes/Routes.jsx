import Basket from "../pages/site/Basket/Basket";
import Home from "../pages/site/Home/Home";
import SiteRoot from "../pages/site/SiteRoot";

const Routes=[
    {
        path: "/",
        element: <SiteRoot/>,
        children:[
            {
                path:"",
                element: <Home/>
            },
            {
                path:"/basket",
                element: <Basket/>
            }

        ]
    }
]

export default Routes