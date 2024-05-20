import Header from "./Header";
import { useState } from "react";

const SignIn = () => {

  const [loginState, setLoginState] = useState(true)

  const toggleLogin = () =>{
    setLoginState(!loginState);
    console.log("clicked")
  }

  return (
    <div>
        <img className="h-[100vh] w-[100vw]" src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"></img>
        <div className="absolute bg-black top-0 w-[100vw] h-[100%] opacity-70"></div>

         <Header className="absolute top-0" />


          <form className="bg-black absolute top-[10vw] left-[35vw] text-white flex flex-col w-[30%] h-[60%] rounded justify-around align-center items-center bg-opacity-80">
            <h1 className="text-2xl font-bold p-2">{loginState ? "Sign In" : "Sign Up"}</h1>
            {loginState ? "" : <input className="m-2 p-2 rounded text-white w-[80%] bg-black bg-opacity-25 border border-white" type="text" placeholder="Name"/>}
            <input className="m-2 p-2 rounded text-white w-[80%] bg-black bg-opacity-25 border border-white" type="email" placeholder="Email"/>
            <input className="m-2 p-2 rounded text-white w-[80%] bg-black bg-opacity-25 border border-white" type="password" placeholder="Password"/>
            <button className="m-2 p-2 rounded bg-red-600 w-[80%]">Sign In</button>
            <p> {loginState ? "Forgot password" : ""}</p>
            <p className="cursor-pointer" onClick={toggleLogin}>New to flix? {loginState ? "Sign In" : "Sign Up"}</p>
          </form>
          

    </div>
  )
}

export default SignIn;