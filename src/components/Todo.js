import React, {Component} from 'react'
import Todos from './Todos'

class Todo extends Component {
	constructor() {
		super();
		this.deleteClickedTodo = this.deleteClickedTodo.bind(this);
	}
	deleteClickedTodo() {
		this.props.onDeleteTodo(this.props.todo);
	}
	render(){
		return(
		  <p data-todos-index = {this.props.todo.id} >
		    <span> {this.props.todo.body} </span>
		    <span className = 'deleteButton' onClick = { this.deleteClickedTodo } >
		    	(x)
		    </span>
		  </p>
		)
	}
}

export default Todo
