/*let theName = prompt("What is your name?");
if(theName === 'Jada') {
    alert('Hello me!');
}
else if(theName === 'Solomon') {
    alert('Hi dad!');
}
else if(theName === 'Leotha') {
    alert('Hi mom!');
}
else {
    alert('Hello stranger!');
}*/
/*prompt function-removes the need for multiple true or false
variables to be added to the top (comparison operators
    simplify everything)- and alert function puts what's being said will 
be applied to webpage !!NOT THE CONSOLE!!, use comparison operators much like 
an excel long if statement.IN CONCLUSION
FOR LONG IF STATEMENTS USE COMPARISON OPERATERS.(MUCH LIKE
EXCEL).*/

let isMe = confirm('Are you Jada?');     
  let isMom = confirm('Are you Leotha?');
  let isDad = confirm('Are you Solly?');
 if(isMe) {
    alert('Hi me');
 }
else if (isMom) {
    alert('Hi mom');
 }
else if (isDad) {
    alert('Hi dad');
 }
 else {
    alert('Hi stranger');
}
