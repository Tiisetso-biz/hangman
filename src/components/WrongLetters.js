import React from 'react'

const WrongLetters = ({ wrongLetters }) => {

  //display the wrong letters each time a user enters
  return (
    <div className="wrong-letters-container">
      <div>
        {wrongLetters.length > 0 && 
          <p>Wrong</p>
        }
        {wrongLetters
          //display the wrong letters using a span
          .map((letter, i) => <span key={i}>{letter}</span>)
          //separate the letters using a comma
          .reduce((previous, current) => previous === null ? [current] : [previous, ', ', current], null)}
      </div>
    </div>
  )
}

export default WrongLetters
