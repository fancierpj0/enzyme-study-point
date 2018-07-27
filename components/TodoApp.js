import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './TodoApp.css';
import {connect} from 'react-redux';
import actions from '../store/actions';
import TodoInput from './TodoInput'
import TodoList from './TodoList'

class TodoApp extends Component {
  static propTypes = {
    // title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <h3 className='title'>{this.props.title || '待办事项'}</h3>
        <TodoInput addTodo={this.props.addTodo}/>
        <TodoList
          todos={this.props.todos}
          toggleTodo={this.props.toggleTodo}
          delTodo={this.props.delTodo}
        />
      </div>
    )
  }
}

export default connect(
  state => ({todos:state})
  , actions
)(TodoApp);
