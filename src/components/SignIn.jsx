import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { useState, useRef } from "react";
import validateInfo from "../utils/validate";
import { SIGNIN_BG } from "../utils/constant";

const SignIn = () => {
  const dispatch = useDispatch();
  const [loginState, setLoginState] = useState(true);
  const [error, setError] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef("Default");

  const handleClick = () => {
    const msg = validateInfo(email.current.value, password.current.value);
    console.log(msg);
    setError(msg);
    if (msg) return;

    if (!loginState) {
      const auth = getAuth();
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(auth.currentUser, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                })
              );
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // navigate("</error>")
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage + "error");
          // ..
        });
    } else {
      const auth = getAuth();
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          console.log(errorMesssage);
        });
    }
  };

  const toggleLogin = () => {
    setLoginState(!loginState);
  };

  return (
    <div>
      <img
        className="h-[100vh] w-[100vw]"
        src={SIGNIN_BG}
        alt="background"
      ></img>
      <div className="absolute bg-black top-0 w-[100vw] h-[100vh] opacity-70"></div>

      <Header className="absolute top-0" />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black absolute top-[10vw] max-[550px]:top-[23vw] max-[425px]:left-[18vw] max-[425px]:w-[70%]  left-[34vw] text-white flex flex-col  max-[900px]:w-[60%] max-[900px]:left-[22vw]   w-[30%] h-[60%] rounded justify-around align-center items-center bg-opacity-80"
      >
        <h1 className="text-2xl font-bold p-2">
          {loginState ? "Sign In" : "Sign Up"}
        </h1>
        {loginState ? (
          ""
        ) : (
          <input
            ref={name}
            className="m-2 p-2 rounded text-white w-[80%] bg-black bg-opacity-25 border border-white"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          ref={email}
          className="m-2 p-2 rounded text-white w-[80%] bg-black bg-opacity-25 border border-white"
          type="email"
          placeholder="Email"
        />
        <input
          ref={password}
          className="m-2 p-2 rounded text-white w-[80%] bg-black bg-opacity-25 border border-white"
          type="password"
          placeholder="Password"
        />
        {error ? <p className="text-red-600 font-bold"> **{error} </p> : null}
        <button
          onClick={handleClick}
          className="m-2 p-2 rounded bg-red-600 w-[80%]"
        >
          {loginState ? "Sign In" : "Sign up"}
        </button>
        <p> {loginState ? "Forgot password" : ""}</p>
        <p className="cursor-pointer" onClick={toggleLogin}>
          {loginState ? "New to flix? Sign Up" : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXaZI27MAVoTor31T5I8-NlGihAY-z1rE",
  authDomain: "namaste-ba435.firebaseapp.com",
  projectId: "namaste-ba435",
  storageBucket: "namaste-ba435.appspot.com",
  messagingSenderId: "300159273620",
  appId: "1:300159273620:web:b13fde8c71bae3242c0281",
  measurementId: "G-7JJDJ65LRX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default SignIn;
