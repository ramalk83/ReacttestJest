import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords=(props)=> {
  let contents
  if(props.guessedWords.length===0){
      contents=(
          <span data-test="guess-instructions">
          Try to guess the words
          </span>
      )
  }else{
      const guessedWordRows=props.guessedWords.map((word)=>(
          <tr data-test="guessed-word" key={word.guessedWord}>
              <td>{word.guessedWord}</td>
              <td>{word.letterMatchCount}</td>
          </tr>
      ))

      contents=(
          <div data-test="guessed-words">
              <h3>Guessed words</h3>
              <table>
                  <thead>
                      <tr><th>Guess</th><th>Matching letters</th></tr>

                  </thead>
                  <tbody>
                      {guessedWordRows}
                  </tbody>
              </table>
          </div>
      )
  }


    return (
        <div data-test="components-guess-words">
            {contents}
        </div>
    )
}


GuessedWords.propTypes={
  guessedWords:PropTypes.arrayOf(
    PropTypes.shape({
        guessedWords:PropTypes.string.isRequired,
        letterMatchCount:PropTypes.number.isRequired
    })
   ).isRequired,
}


export default GuessedWords;