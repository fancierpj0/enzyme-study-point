import React from 'react';

export default class TodoInput extends React.Component{
  handleKeyDown = (ev) => {
      let code = ev.keyCode;
      if(code == 13){
        let text = ev.target.value;
        this.props.addTodo(text);
        ev.target.value = '';
      }
  };

  addTodo = (ev) => {
    let text = this.todo.value;
    this.props.addTodo(text);
    this.todo.value = '';
  };

  render(){
    return (
      <div>
        <input ref={x=>this.todo=x} onKeyDown={this.handleKeyDown}/>
        <input id="addBtn" onClick={this.addTodo} type='button' value='增加'/>
      </div>
    )
  }
}
