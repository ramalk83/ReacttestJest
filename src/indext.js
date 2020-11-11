export function getLetterMatchCount(guessedWord,secretWord){
    const secretset=new Set(secretWord.split(''));
    const  guessedset=new Set(guessedWord.split(''));
    return [...secretset].filter(letter=>guessedset.has(letter)).length
}
