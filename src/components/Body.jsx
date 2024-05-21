import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from "./Browse";
import SignIn from "./SignIn"

const Body = () => {
  const appRoute = createBrowserRouter([
    {
      path:'/',
      element: <SignIn/>,
    },
    {
      path:'/signin',
      element: <SignIn/>
    },
  ])

  return (
    <>
        <RouterProvider router={appRoute}/>
    </>
    
  );

}

export default Body