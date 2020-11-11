import React from 'react';
import App from './App';
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16'
 
Enzyme.configure({adapter:new EnzymeAdapter()})
const setup=()=>shallow(<App/>);
const findTestAttr=(wrapper,val)=> wrapper.find(`[data-test='${val}']`);

test("renders without error",()=>{
const wrapper=setup();
});

