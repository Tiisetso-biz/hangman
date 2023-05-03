//show popup notification for 2 seconds
export function showNotification(setter) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

//checking for a win or loss
export function checkWin(correct, wrong, word) {
  let status = 'win';

  // Check for win
  word.split('').forEach(letter => {
    if(!correct.includes(letter)){
      status = '';
    }
  });
  
  // Check for lose
  if(wrong.length === 6) status = 'lose';

  return status
}