import { TrendingUpTwoTone } from '@material-ui/icons';
import {actionTypes} from '../actions';
import successReducer from './successReducer';


test('return intial state',()=>{
const newState=successReducer(undefined,{});
expect (newState).toBe(false)
})

test('return state CORRECT GUESS',()=>{
    const newState=successReducer(undefined,{type:actionTypes.CORRECT_GUESS});
    expect (newState).toBe(true)
})
