import {getLetterMatchCount} from './indext';

describe('getLetterMatchCount',()=>{
    const secretWord= 'party';

    test('return correct count no matching letters',()=>{
    const letterMatchCount=getLetterMatchCount('bones',secretWord)
    expect(letterMatchCount).toBe(0);
    });
    test('return correct count 3 matching letters',()=>{
        const letterMatchCount=getLetterMatchCount('train',secretWord)
    expect(letterMatchCount).toBe(3);
    });
    test('return correct count duplicate letters',()=>{
        const letterMatchCount=getLetterMatchCount('parka',secretWord)
        expect(letterMatchCount).toBe(3);
    });
}

)