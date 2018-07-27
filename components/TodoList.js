import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => <TodoItem todo={todo} key={todo.id} toggleTodo={this.props.toggleTodo} delTodo={this.props.delTodo}/>)
        }
      </ul>
    )
  }
}
