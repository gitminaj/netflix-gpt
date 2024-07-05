import Header from "./Header";
import { useState, useRef } from "react";
import validateInfo from "../utils/validate";
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";



const SignIn = () => {
  const [loginState, setLoginState] = useState(true)
  const [error, setError] = useState(null)

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("Default")

  const handleClick = () =>{

    const msg = validateInfo(email.current.value,password.current.value)
    console.log(msg)
    if(msg) return;

    if(!loginState){

    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage)
        console.log(errorCode - errorMessage)
        // ..
      });
    }

  }

  const toggleLogin = () =>{
    setLoginState(!loginState);
    console.log("clicked")
  }

  return (
    <div>
        <img className="h-[100vh] w-[100vw]" src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"></img>
        <div className="absolute bg-black top-0 w-[100vw] h-[100vh] opacity-70"></div>

         <Header className="absolute top-0" />


          <form onSubmit={(e) => e.preventDefault() } className="bg-black absolute top-[10vw] max-[550px]:top-[23vw] max-[425px]:left-[18vw] max-[425px]:w-[70%]  left-[34vw] text-white flex flex-col  max-[900px]:w-[60%] max-[900px]:left-[22vw]   w-[30%] h-[60%] rounded justify-around align-center items-center bg-opacity-80">
            <h1 className="text-2xl font-bold p-2">{loginState ? "Sign In" : "Sign Up"}</h1>
            {loginState ? "" : <input ref={name} className="m-2 p-2 rounded text-white w-[80%] bg-black bg-opacity-25 border border-white" type="text" placeholder="Name"/>}
            <input ref={email} className="m-2 p-2 rounded text-white w-[80%] bg-black bg-opacity-25 border border-white" type="email" placeholder="Email"/>
            <input ref={password} className="m-2 p-2 rounded text-white w-[80%] bg-black bg-opacity-25 border border-white" type="password" placeholder="Password"/>
            {error ? <p className="text-red-600 font-bold"> **{error} </p> : null} 
            <button onClick={handleClick} className="m-2 p-2 rounded bg-red-600 w-[80%]">{loginState ? "Sign up" : "Sign In"}</button>
            <p> {loginState ? "Forgot password" : ""}</p>
            <p className="cursor-pointer" onClick={toggleLogin}>{loginState ? "New to flix? Sign In" : "Already registered? Sign Up"}</p>
          </form>
          

    </div>
  )
}





// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACta6fzMNKyD0FAr-rpAWUPvNsvXNF9VM",
  authDomain: "binge-flix-1986c.firebaseapp.com",
  projectId: "binge-flix-1986c",
  storageBucket: "binge-flix-1986c.appspot.com",
  messagingSenderId: "595826465571",
  appId: "1:595826465571:web:79adae551390588756ca96",
  measurementId: "G-2TXMCCXQR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



export default SignIn;