import React from 'react';

const Word = ({ selectedWord, correctLetters }) => {

  //display the correct letters using a span
  //use index in the map to identify the component
  //print the letter on the span, else print a blank
  return (
    <div className="word">
      {selectedWord.split('').map((letter, idx) => {
        return (
          <span className="letter" key={idx}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word
