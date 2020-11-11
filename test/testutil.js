import { ExpansionPanelActions } from "@material-ui/core";
import { checkPropTypes } from "prop-types";
import { createStore } from "redux";

import rootReducer from '../src/reducers'
import {middlewares} from '../src/configureStore'


export const storeFactory=(initialState)=>{
  const createStoreMiddleware=applyMiddleware(...middlewares)
  return createStoreMiddleware(rootReducer,initialState)
}

export const findTestAttr=(wrapper,val)=>{ 
return wrapper.find(`[data-test='${val}']`);
}

export const checkProps=(component,conformingProps)=>{
const propError=checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
expect(propError).toBeUndefined();
}