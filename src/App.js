import React, { useState } from 'react';
import {
	Routes,
	Route,
  } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';


function App() {
	const [currentForm, setCurrentForm] = useState('login');

	const toggleForm = (formName) => {
		setCurrentForm(formName);
	}
  
	return (
		<>

		{
			currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
		}
		
		
	    <Home />

		
		
		</>
	);
}

export default App;
