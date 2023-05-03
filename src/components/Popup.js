import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers';

//define the popup notification
const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  //for when it's a win
  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = '✅ Congratulations! You won!';
    playable = false;
  }/**for when it's a loss */ 
  else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = '❌ You have lost.';
    finalMessageRevealWord = `The word was: ${selectedWord}`;
    playable = false;
  }

  //make the game playable
  useEffect(() => {
    setPlayable(playable);
  });

  return (
    //return the popup message along with a button for replay
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h3>{finalMessage}</h3>
        <h4>{finalMessageRevealWord}</h4>
        <button onClick={playAgain}>Restart Game</button>
      </div>
    </div>
  )
}

export default Popup
