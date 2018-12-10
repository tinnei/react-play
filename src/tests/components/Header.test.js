import React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
// this is to remove all the junks in snapshots
// import toJSON from 'enzyme-to-json'; <-- this is done

test('should render Header correctly', ()=> {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
    // console.log(renderer.getRenderOutput());
    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').text().toBe('Expensify'));
    // expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
});