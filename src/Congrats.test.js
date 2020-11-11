import React from 'react';
import Congrats from './Congrats';
import {shallow} from 'enzyme';

import {findTestAttr,checkProps} from '../test/testutil'
import { ExpansionPanelActions } from '@material-ui/core';
import checkPropTypes from 'check-prop-types'


const defaultProps={success:false};

const setup=(props={})=>
{
    const setupProps={...defaultProps, ...props }
    return shallow(<Congrats {...setupProps }/>)
}

test('render congrates',()=>{
    const wrapper=setup();
    const component=findTestAttr(wrapper,"component-congrats");
    expect(component.length).toBe(1);
});

test('render success true',()=>{
    const wrapper=setup({success:true});
    const message=findTestAttr(wrapper,"congrats-message");
    expect(message.text().length).not.toBe(0);
});

test('render success false',()=>{
    const wrapper=setup({success:false});
    const message=findTestAttr(wrapper,"component-congrats");
    expect(message.text()).toBe('');
});

test('render success false',()=>{
    const expectedProps={success:false};
    checkProps(Congrats,expectedProps)
});

