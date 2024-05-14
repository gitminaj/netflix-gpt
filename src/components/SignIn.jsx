

const SignIn = () => {
  return (
    <div>
        <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"></img>


          <form className="bg-black absolute top-[10vw] left-[35vw] text-white flex flex-col w-[30%] h-[50%] rounded justify-around align-center items-center bg-opacity-80">
            <h1 className="text-2xl font-bold p-2">Sign In</h1>
            <input className="m-2 p-2 rounded text-white w-[80%] bg-black bg-opacity-25 border border-white" type="Email" placeholder="email"/>
            <input className="m-2 p-2 rounded text-white w-[80%] bg-black bg-opacity-25 border border-white" type="Password" placeholder="password"/>
            <button className="m-2 p-2 rounded bg-red-600 w-[80%]">Sign In</button>
            <p>Forgot password</p>
            <p>New to flix? Sign In</p>
          </form>

    </div>
  )
}

export default SignIn;