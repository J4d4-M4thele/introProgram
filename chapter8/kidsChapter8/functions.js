/*let ourFirstFunction = function() {
    console.log('Hello World!')
}
ourFirstFunction();*/

//let sayHelloTo =  function (fullName) {
  //  alert('Hello ' + fullName);
//}
//code runs from down here.
/*sayHelloTo('Jada');
sayHelloTo('Hazel');
sayHelloTo('Lebo');*/

// function drawCats(howManyTimes) {
//  for(let i=0; i < howManyTimes;i++ ){
//     console.log(i + '=^.^=');
//  }
// }
// drawCats(5);
// console.log('the end')

// function printMultipleTimes(howManyTimes,whatToDraw){
//   for(let i =0; i < howManyTimes; i++){
//     console.log(i + ' ' + whatToDraw)
//   }
// }
// printMultipleTimes(10,'>_<');
// function double(number){
//   return number*2;
// }
// console.log(double(3))
// /*return shows result of function. can call function as much as you want */
// let answer = double(6) + double (8);
// alert(answer);




// function generateRandomInsult(){
//   let randomBodyParts = ["Face", "Nose", "Hair"];
//   let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//   let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
//  // Join all the random strings into a sentence:
//  let randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + 
//  pickRandomWord(randomAdjectives)+ " " + pickRandomWord(randomWords) + "!!!";
// return randomString;
// }
// function pickRandomWord(words) {
//   let word= words[Math.floor(Math.random()* words.length)];
//   return word;
// }
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());
// console.log(generateRandomInsult());


// function fifthLetter(fullName){
//   if(fullName.length < 5){
//     return;
//   }
//   return "The fifth letter of your name is " + fullName[4] + ".";
// };
// alert(fifthLetter('Nicholas'));
function medalForScore(score){
  if (score < 3) {
     return "Bronze";
    }
     if (score < 7) {
    return "Silver";
    }
     return "Gold";
}
let yourScore= prompt('what is your score?')
alert('You get a ' + medalForScore(yourScore) + ' medal.')

