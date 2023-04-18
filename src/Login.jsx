import React, { useState } from "react";
//import { Link } from 'react-router-dom';

const Login = (props) => {
   const [ name, setName ] =useState('');
   const [ email,setEmail ] = useState('');
   const [ pass, setPass ] = useState('');

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(name);
   }
  
    return (
        <>
         <h1 className="title">My To Do App </h1>
        <div className="auth-form-container">
           <h2>Login</h2>
            <form onSubmit={handleSubmit}>

                <label htmlFor="name">name:</label>
                <input 
                    className="logininput"
                    type="name" 
                    value={name} 
                    id="name" 
                    placeholder="name" 
                    onChange={(e) => setName(e.target.value)} ></input><br/>

                <label htmlFor="email">email:</label>
                <input 
                    className="logininput" 
                    value={email} 
                    type="email" 
                    id="email" 
                    placeholder="youremail@gmail.com" 
                    onChange={(e) => setEmail(e.target.value)} ></input><br/>

                <label htmlFor="password">password:</label>
                <input 
                    className="logininput" 
                    value={pass} 
                    type="password" 
                    placeholder="" 
                    onChange={(e) => setPass(e.target.value)} ></input><br/>

                <button className="clearBTN" type="submit">Submit</button>
            </form>
             <button className="link-btn" onClick={() => props.onFormSwitch('register')}> Don't have an account? Register here.</button>
        </div>
        
        
        
        </>
    )

}

export default Login;