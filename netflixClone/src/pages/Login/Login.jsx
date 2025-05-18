import React, { useState } from 'react'
import './Login.css'
import LogoNeftlix from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
const Login = ({firebase_class}) => {


  const navigate  = useNavigate()
  const [signState , setSignState] = useState("Sign In")
  const [name , setName]  = useState("")
  const [password , setPassword]  = useState("")
  const [email , setEmail]  = useState("")

const user_auth = async (event) => {
  event.preventDefault();
  let userName;

  if (signState === "Sign In") {
    userName = await firebase_class.sign_in_user(email, password);
  } else {
    userName = await firebase_class.sign_up_user(email, password, name);
  }

  //   if (!userName) {
  //   console.error("No userName returned. Aborting navigation.");
  //   return;
  // }

  await move_to_home_page(event, userName);


};

const move_to_home_page = async(event, userName) => {
  console.log("name:", userName);

    console.log("move to home page");
    navigate("/", { state: { userName: userName } });
  }


  return (
    <div className='Login'>
      <img  className = 'logo-login' src={LogoNeftlix} alt="" />
      <div className="box-login">
        <div className="login-form">
        <h1 className="title"> {signState}</h1>
        <form action="">
          {signState == "Sign Up"?
          <div>
          <p className="Your Name">Full Name:</p>
          <input type="text" value = {name} onChange ={(e)=>{setName(e.target.value)}} name="name" id="name_user" />
          </div> 
          :
          <></>
          }
          
          <p className="username">Email:</p>
          <input type="email" value = {email} onChange ={(e)=>{setEmail(e.target.value)}} name="email" id="email_user" />
          <p className="username">Password:</p>
          <input type="password" value = {password} onChange ={(e)=>{setPassword(e.target.value)}} name="password" id="password_user" />
          <div className="buttons">
            <button type="submit" onClick={user_auth}>{signState}</button>
          </div>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {
          signState == "Sign Up"? 
          <p>Already with us? <span onClick={()=> setSignState("Sign In")}>Sign In Now</span> </p>
          : <p>New To Netflix? <span onClick={()=> setSignState("Sign Up")}>Sign Up Now</span> </p>
        }
        {
          signState == 'Sign In'?
          <p>Forgot Password? <span>Send Link Now</span> </p>
          :<></>
        }
        </div>
        </div>

      </div>
    </div>
  )
}

export default Login