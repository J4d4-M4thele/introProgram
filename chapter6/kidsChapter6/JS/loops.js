/*let sheepCounted = 1;
while (sheepCounted < 11) {
    alert('I have counted ' + sheepCounted
    + ' sheep!');
     sheepCounted++ ;
}
alert('Zzzzzzzzzzz');
/*Alert- shows in webpage, console.log - 
shows up in console must add condition
to avoid stack overflow */

/*For loop is more advanced than while loop */

//  let timesToSayHello = 3;
// for (let i (i is the index) = 0 ; i < timesToSayHello ; i++) {
//     alert('Hello');
// }

/*for (let sheepCounted = 1; sheepCounted < 11 ; sheepCounted++) {
    alert('I have counted ' + sheepCounted
    + ' sheep!');
}
alert('Zzzzzzzzzzz');*/

/*let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
for(let i = 0; i < animals.length; i++) {
    console.log('This zoo contains a ' + animals[i] + '.')
}*/

/*let girls = ['beautiful' , 'smart' , 'worthy' , 'capable']
for (let i = 0; i < girls.length; i++) {
    console.log('I am ' + girls[i] + '!');
}
let nickname = "Nick";
for (i=0; i< nickname.length; i++) {
    console.log('My name contains the letter ' + nickname[i] + '.' );
}*/

/*for (let x = 2; x < 10000; x= x * 2) {
    console.log(x);
}
for(let x=3; x < 10000 ;x = x * 3 ) {
    console.log(x);
}*/


/*let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
console.log(animals[0] = 'Awesome ' + animals[0]);
console.log(animals[1] = 'Awesome ' + animals[1]);
console.log(animals[2] = 'Awesome ' + animals[2]);
console.log(animals[3] = 'Awesome ' + animals[3]);*/

/*let animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];
console.log(animals);
for (let h = 0; h < animals.length; h++){
 animals[h] = 'Awesome' + animals[h];
}
console.log(animals);*/


/*let alphabet = "abcdefghijklmnopqrstuvwxyz"
let randomString = "" 
for (let h = 0 ; h < 6; h++) {
 let randomIndex = Math.floor(Math.random()* alphabet.length);
 randomString += alphabet[randomIndex];
} 
console.log(randomString);*/

let input = "javascript is awesome";
let output = "";
for (let h = 0; h  < input.length; h++) {
    if (input[h]=== 'a') {
        output += 4;
    }
    else if (input[h]=== 'e') {
        output += 3;
    }
    else if (input[h]=== 'i') {
        output += 1;
    }
    else if (input[h]=== 'o') {
        output +=0;
    }
    else {
        output += input[h];
    }

}
console.log(output);

/*for () should be standard.iF THAT () THEN THIS{ }...PRACTICE MORE AT HOME!!!!!!!!!! */
// confirm is only used for yes/no quesions.
