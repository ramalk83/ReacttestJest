import React from 'react';
import Input from './Input';
import {shallow} from 'enzyme';

import {findTestAttr,storeFactory} from '../test/testutil'
;

const setup=(initialState={})=>
{
    const store=storeFactory(initialState);
    const wrapper=shallow(<Input store={store}/>).dive().dive();
    return wrapper;
}



describe('render',()=>{
 describe('word has not been guessed',()=>{
     let wrapper;
     
     beforeEach(()=>{
         const initialState={success:false};
         wrapper=setup(initialState);        
     })

     test('render without error',()=>{
        const component=findTestAttr(wrapper,"component-input");
         expect(component.length).toBe(1);      
     });
     test('render inputbox',()=>{
        const inputBox=findTestAttr(wrapper,"input-box");
        expect(inputBox.length).toBe(1);     
     });
    test('render submit button',()=>{
        const submitButton=findTestAttr(wrapper,"submit-button");
        expect(submitButton.length).toBe(1);
    });
 });

 describe('word guessed',()=>{
    let wrapper;
     
    beforeEach(()=>{
        const initialState={success:true};
        wrapper=setup(initialState);
       
    })

    test('render without error',()=>{
        const component=findTestAttr(wrapper,"component-input");
        expect(component.length).toBe(1);     
    });
    test('doese not render inputbox',()=>{
        const inputBox=findTestAttr(wrapper,"input-box");
        expect(inputBox.length).toBe(0);   
   });
   test('doese not render submit button',()=>{
    const submit=findTestAttr(wrapper,"submit-button");
    expect(submit.length).toBe(0);
   });
 });
 describe('update state',()=>{
        
 });

})