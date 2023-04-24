let words = [
    "javascript",
    "monkey",
    "amazing",
    'flowers',
    'umbrella',
    'wonderful'
    ];

let word = pickWord();
let numberOfGuesses= 11;/*Limit guesses */
let userName = prompt('What is your name ?');
 alert('Welcome to Hang Man ' + userName + '!')
console.log(word);
let answerArray = []; 
setupAnswerArray();
let guess =' ';
let remainingLetters = word.length;


while ( remainingLetters > 0 && numberOfGuesses > 0) {      
    if (guess === null) {
        break;
  } else if (guess.length > 1) {
        alert('Guess a single letter.');
     }

 guess = prompt ('Guess a single letter or click cancel to exit')
 guess = getGuess();
 /*personalise game by using persons username */
   function pickWord () {
       return  words[Math.floor(Math.random() * words.length)];
    // Return a random word
    };


    function setupAnswerArray(word) {
        
        for (i = 0;  i < word.length; i++) {
            answerArray[i]= '_';
        
        }
    // Return the answer array
    };
    var showPlayerProgress = function (answerArray) {
        alert(answerArray.join(' '));   
    // Use alert to show the player their progress
    };

    function getGuess() {
    // Use prompt to get a guess
    numberOfGuesses--;
    
   
    };
     function updateGameState() {
        guess = guess.toLowerCase(); /*lowercase works */
        let correctGuesses =0;
        for (let j= 0; j < word.length ; j++) {
             if (word[j] === guess) {
                 if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    correctGuesses++;
                    let correctGuesses = updateGameState();
                    remainingLetters -= correctGuesses;
                } else {
                alert('You have already chosen this letter!');
                break ;
             }
            }
     };
         return correctGuesses;
              
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
    };
    function showAnswerAndCongratulatePlayer(answerArray) {
        if (remainingLetters===0){
            alert(answerArray.join(' '));
             alert('Congratulations ' + userName + '!!!');
        }else if (numberOfGuesses===0) {
            alert('You ran out of guesses! The answer is ' + word);
        }
        else {
            alert('Game ended! You quit, the answer is ' + word);
        };
    // Use alert to show the answer and congratulate the player
    }
};