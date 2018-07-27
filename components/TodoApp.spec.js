import React, {Component} from 'react';

//shallow表示浅渲染组件，只渲染当前组件，而不渲染子组件
import Enzyme, {shallow,mount} from 'enzyme';

import TodoApp from './TodoApp';
import Adaptor from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import store from '../store'

Enzyme.configure({adapter: new Adaptor()});

describe('TodoApp', function () {

  it('测试标题是不是待办事项', function () {
    let title = '2';

    //浅渲染

    // let wrapper = shallow(<Provider store={store}>
    //   <TodoApp title={title}/>
    // </Provider>);


    // 真·渲染

    let wrapper = mount(<Provider store={store}>
      <TodoApp title={title}/>
    </Provider>);

    //因为这里外面还有层
    let h3 = wrapper.find('h3.title');
    expect(h3.text()).toMatch(new RegExp(title));
  });

  // it('测试删除待办', function () {
  //   let wrapper = mount(<Provider store={store}>
  //     <TodoApp />
  //   </Provider>);
  //
  //   let lis = wrapper.find('li');
  //   expect(lis.length).toEqual(2);
  //
  //   let buttons = wrapper.find('button');
  //   buttons.at(0).simulate('click');
  //   let remindLis = wrapper.find('li');
  //   expect(remindLis.length).toEqual(1);
  // });

  it('测试切换待办', function () {
    let wrapper = mount(<Provider store={store}>
      <TodoApp />
    </Provider>);

    let spans = wrapper.find('span');
    let span = spans.at(0);
    expect(span.hasClass('todo')).toBe(true);
    span.simulate('click',1);

    setTimeout(()=>{
      expect(span.hasClass('todo')).toBe(false);
    },300)
  });

  it('测试增加待办', function () {
    //TODO store 不同用例之间会影响
    let wrapper = mount(<Provider store={store}>
      <TodoApp />
    </Provider>);

    let addBtn = wrapper.find('#addBtn');
    let lis = wrapper.find('li');
    expect(lis.length).toBe(2);
    addBtn.simulate('click');
    setTimeout(()=>{
      let lis = wrapper.find('li');
      expect(lis.length).toBe(3);
    },300)
  });

});
