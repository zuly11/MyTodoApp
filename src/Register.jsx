
import React, { useState, useNavigate } from "react";
//import { Link } from 'react-router-dom';



export default function Register (props) {
    const [ name, setName ] =useState('');
    const [ email,setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [error, setError] = useState("");
  
    function _register(ev) {
      try {
        setError("");
        ev.preventDefault();
       
      } catch (error) {}
    }
  
    return (
      <div className="auth-form-container">
        <h1>Register a new account!</h1>

        <div>{error} </div>

        <form onSubmit={_register}>
          <input
            className="textinput"
            placeholder="name"
            value={name}
            type="name"
            id="name"
            onChange={(ev) => setName(ev.target.value)}
          ></input>

        <input
            className="textinput"
            placeholder="youremail"
            value={email}
            type="email"
            id="email"
            onChange={(ev) => setEmail(ev.target.value)}
          ></input>

         <input
            className="textinput"
            placeholder="password"
            value={pass}
            type="password"
            id="password"
            onChange={(ev) => setPass(ev.target.value)}
          ></input>
  
          <button type="submit" className="clearBTN">
            Register
          </button>
        </form>
        <button className='link-btn' onClick={() => props.onFormSwitch('login')}>  Already have an account? Login here.</button>
      </div>
    );
  };

