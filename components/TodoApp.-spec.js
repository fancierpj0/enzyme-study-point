import React, {Component} from 'react';

//shallow表示浅渲染组件，只渲染当前组件，而不渲染子组件
import Enzyme, {shallow} from 'enzyme';

import TodoApp from './TodoApp';
import Adaptor from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adaptor()});

describe('TodoApp', function () {

  it('测试标题是不是待办事项', function () {
    let title = '2';
    let wrapper = shallow(<TodoApp title={title}/>);
    let h3 = wrapper.find('h3.title');
    expect(h3.text()).toMatch(new RegExp(title));
  });

});
