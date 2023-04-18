import React from 'react';

export default function Todo({ todo, toggleTodo }) {

	function handleTodoClick() {
		toggleTodo(todo.id)
	}

	return (
	<div className="paperStyle">
		<label className="label">
			<input className="checkbox1" type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
			{todo.name}
		</label>
	</div>
	)
}
