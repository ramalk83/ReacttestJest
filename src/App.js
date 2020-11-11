import React, { Component } from 'react'
import {connect} from 'react-redux'
import './App.css'
import Congrats from './Congrats'
import GuessedWords from './GuessedWords'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Congrats success={true}/>  
       <GuessedWords guessedWords={[
          {guessedWord:'st23', letterMatchCount:3},
       ]}/>
          
      </div>
    )
  }
}

