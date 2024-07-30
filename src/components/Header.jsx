import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";


const Header = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const auth = getAuth();
const user = useSelector( store => store?.user) 

const handleSignout = () => {

   signOut(auth).then(() => {
     navigate("/signin")
   }).catch((error) => {
     navigate("/error")
   });
 }

useEffect( () =>{

  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid,email,displayName} = user;
      dispatch(addUser({uid : uid, email: email, displayName: displayName}));
      navigate("/browse");
      // ...
    } else {
      // User is signed out
      dispatch(removeUser);
      navigate("/")
    }
  });

  return () => unsubscribe();

    },[])



  return (
    <div className=" flex justify-between">
      <div className="logo">
        <img
          className="absolute top-0 w-40"
          src={LOGO}
        ></img>
      </div>


      { user && <div>
         <p className=" cursor-pointer font-semibold p-2" onClick={handleSignout}>Sign Out</p>

      </div>}

    </div>
  );
};

export default Header;
