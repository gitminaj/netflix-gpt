import { getAuth, signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Header = () => {
const navigate = useNavigate();
const auth = getAuth();
const user = useSelector( store => store.user) 

 const handleSignout = () => {

   signOut(auth).then(() => {
     navigate("/signin")
   }).catch((error) => {
     navigate("/error")
   });

 }

  return (
    <div className=" flex justify-between">
      <div className="logo">
        <img
          className="absolute top-0 w-40"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        ></img>
      </div>

      <div>
        {( user && <p className=" cursor-pointer font-semibold p-2" onClick={handleSignout}>Sign Out</p>)}

      </div>

    </div>
  );
};

export default Header;
