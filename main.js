/*
To complete the activity, you will need to do the following:

Complete - Make an array of all 26 letters of the alphabet (lowercase).
Complete - Make a variable that will randomly pick one of the 26 letters as a secret letter.
Setup a keyboard event on the whole body.
    If the key you pressed is the secret key, you should append "SECRET KEY PRESSED" to the body in a tag of your choice.
        After the secret key is pressed, randomly pick another secret key and assign it to your secret key variable.
*/

const letters= ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z'];

document.body.addEventListener('keyup', function(event) {
    console.log(event.key);

    document.getElementById("guess").innerHTML = "You guessed: " + (event.key) + ", try again";
     const pTag = document.createElement('p');
		pTag.textContent = event.target.value;
		document.body.appendChild(pTag);
})

const randomLetter = letters[Math.floor(Math.random() * 26)];
console.log(randomLetter);
 
if (randomLetter === key) {
    alert("SECRET KEY PRESSED");
}; 

/*
document.body.addEventListener('keyup', function(event) {
    const letterIndex = randomLetter.indexOf(event.key);
    console.log(letterIndex);
    if(letterIndex === event.key) {
      startingGuesses--;
      guessesEl.textContent = startingGuesses;
    } 
  */  
    
    /* else {
      let wordArray = wordToGuess.split('');
      for(let i = 0; i < wordToGuess.length; i++) {
        if(randomWord[i] === event.key) {
          wordArray[i] = randomWord[i];
        }
      }
      wordToGuess = wordArray.join('');
      wordEl.textContent = wordToGuess;
    }
  });


/* Kali's code
document.body.addEventListener('keyup',function(event) {
    console.log(event.key); 

*/
