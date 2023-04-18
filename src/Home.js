
import React, { useState, useRef, useEffect } from 'react';

import TodoList from './TodoList';
import uuidv4 from 'uuid/dist/v4';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import Lottie from "lottie-react";
import MmyjV4QTdj from "./MmyjV4QTdj.json";


const LOCAL_STORAGE_KEY = 'todoApp.todos'

const Home = () => {

    const [todos, setTodos] = useState([]);
	const todoNameRef = useRef();
    const container = useRef(null);



	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
		if (storedTodos) setTodos(storedTodos)
	}, [])

	useEffect(() =>{
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
	}, [todos])

	function toggleTodo(id) {
		const newTodos = [...todos]
		const todo = newTodos.find(todo => todo.id === id)
		todo.complete = !todo.complete
		setTodos(newTodos)
	}

	function handleAddTodo(e) {
		const name = todoNameRef.current.value
		if (name === " ") return
		setTodos(prevTodos => {
			return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
		})
		todoNameRef.current.value = null
	}

	function handleClearTodos() {
		const newTodos = todos.filter( todo => !todo.complete)
		setTodos(newTodos)

	}

    return (
        <>
        	<Container className="container text-center">
			<h1 className="title">My To Do List</h1>
            <div className="container" ref={container}></div>
            <Lottie className="lottie" animationData={MmyjV4QTdj} />
			<FontAwesomeIcon icon={faCheckDouble} style={{color: "#418B3D", backgroundColor: "whitesmoke"}} className="checkmarkIcon" />	
			<TodoList className="todo-list" todos={todos} toggleTodo={toggleTodo} />
			<div className="applyDiv">
			<input className='textinput' ref={ todoNameRef } type="text" /><br />
			<button className="addBTN" onClick={handleAddTodo}>add To Do</button>
			<button className="clearBTN" onClick={handleClearTodos}>Clear Completed</button>
			<div>{todos.filter(todo => !todo.complete).length} Left to-do</div>
			</div>
			</Container>
        
        </>

         )

}


export default Home;