import {actionTypes, correctGuess} from './';

describe('correctGuess',()=>{
    test('retuen an action -CORRECT GUESS',()=>{
        const action=correctGuess();
        expect(action).toEqual({type:actionTypes.CORRECT_GUESS})
    })
})