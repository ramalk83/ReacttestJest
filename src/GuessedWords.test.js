import React from 'react';
import GuessedWords from './GuessedWords';
import {shallow} from 'enzyme';
import {findTestAttr,checkProps} from '../test/testutil'
import checkPropTypes from 'check-prop-types'


const defaultProps={
    guessedWords:[{guessedWord:'train',letterMatchCount:3}]
}

const setup=(props={})=>{
    const setupProps={...defaultProps,...props}
    return shallow(<GuessedWords{...setupProps}/>)
}


test('expected props',()=>{
    checkProps(GuessedWords,defaultProps)
})

describe('no words guessed',()=>{

    let wrapper
    beforeEach(()=>{
        wrapper=setup({guessedWords:[]})      
    });

    test('renders no error',()=>{
        const component=findTestAttr(wrapper,'components-guess-words');
      expect(component.length).toBe(1)
    });

    test('instruction to guess the word',()=>{
        const instructions=findTestAttr(wrapper,'guess-instructions');
        expect(instructions.text().length).not.toBe(0)
    });
})



describe('there are words guessed',()=>{
    let wrapper;
    const guessedWords = [
        {guessedWord:'train', letterMatchCount:3},
        {guessedWord:'agile', letterMatchCount:1},
        {guessedWord:'party', letterMatchCount:5}
    ];

    beforeEach(()=>{
        wrapper=setup({guessedWords})      
    });

    test('renders no error',()=>{
        const component=findTestAttr(wrapper,'components-guess-words');
      expect(component.length).toBe(1)
    });
    test('renders guessed word scetion',()=>{
        const guessWordsNode=findTestAttr(wrapper,'guessed-words');
      expect(guessWordsNode.length).toBe(1)
    });
    test('correct no of  guessed word ',()=>{
        const guessedWordNode=findTestAttr(wrapper,'guessed-word');
      expect(guessedWordNode.length).toBe(guessedWords.length)
    });
})