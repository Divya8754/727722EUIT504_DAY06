
import React, { useState } from 'react'
import './login.css';
import './Createac';
import {Link, useNavigate} from 'react-router-dom';

function Login() {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const nav=useNavigate();
    var count =1;
    const handleSubmit =(e)=>{
        if(true){
            nav("/home")
        }
        else{
            nav("/login")
        }
    }
    const handleUsername=(e)=>{
       setUsername(e.target.value)
       console.log(username)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
        console.log(password)
    }
  return (
    <body>
   <header class="lheader">
   </header>
    
    <div class="background"></div>
    <div class="container">
      
        <div class="login-section">
            <div class="form-box login">
                <form onSubmit={handleSubmit}>
                    <h2>Log In</h2>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-envelope'></i></span>
                        <input type="text" placeholder='Username' value={username} onChange={handleUsername}required/>
                    </div>
                    <div class="input-box">
                        <span class="icon"><i class='bx bxs-lock-alt' ></i></span>
                        <input type="password" placeholder='Password' value={password} onChange={handlePassword}required/>
                    </div>
                    <div class="remember-password">
                        <label for=""><input type="checkbox"/>Remember Me</label>
                        <a href="https://mail.google.com/?">Forget Password</a>
                    </div>
                    <button class="btn">Log In</button>
                    <button class="google"><img src="https://img.freepik.com/free-photo/close-up-colored-pencils-with-books_1134-11.jpg?w=900&t=st=1689153609~exp=1689154209~hmac=3374ee4b768c2bc3feb1fa2240e932add0f3e399c2801099de3b32fe3aefce7f" class='googleimg'></img>Sign In with Google</button>
                    <div class="create-account">
                        <p>Don't have an Account?<Link to="/createac"><a class="register-link">Sign Up</a></Link></p>
                    </div>
                </form>
            </div>
            
                   
               
            </div>
        </div>
    
</body>
    
  )
}

export default Login