import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Browse from "./Browse";
import SignIn from "./SignIn"
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const appRoute = createBrowserRouter([
    {
      path:'/',
      element: <SignIn/>,
    },
    {
      path:'/signin',
      element: <SignIn/>
    },
    {
      path:'/browse',
      element: <Browse/>
    },
  ])

  useEffect( () =>{

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName} = user;
    dispatch(addUser({uid : uid, email: email, displayName: displayName}))

    // ...
  } else {
    // User is signed out
    dispatch(removeUser);
  }
});
  },[])

  return (
    <>
        <RouterProvider router={appRoute}/>
    </>
    
  );

}

export default Body