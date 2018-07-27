import React, {Component} from 'react';

//shallow表示浅渲染组件，只渲染当前组件，而不渲染子组件
import Enzyme,{shallow} from 'enzyme';

import TodoItem from './TodoItem';
import Adaptor from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adaptor()});

describe('TodoItem', function () {

  it('测试类名', function () {
    let todo = {id:1,text:'1',completed:false};
    let wrapper = shallow(<TodoItem todo={todo}/>);
    let span = wrapper.find('span');
    expect(span.text()).toMatch(new RegExp(todo.text));

    expect(span.hasClass('todo')).toBe(true);
    expect(span.hasClass('todo-completed')).toBe(false);

    //模拟有人点击了一下
    // span.simulate('click');
    //
    // expect(span.hasClass('todo')).toBe(false);
    // expect(span.hasClass('todo-completed')).toBe(true);
  });

});
