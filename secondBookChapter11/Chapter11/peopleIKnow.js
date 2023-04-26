let people = [
    "Kareem", 
    "Fatma", 
    "Sumaya", 
    "Mr. Hobson", 
    "Ms. Young", 
    "Mrs. O' Doherty"
];
let otherPeople = [
    "Emilie", 
    "Mommy", 
    "Dad", 
    "Kathy"
];

document.getElementById("peopleIKnow").innerHTML = people.valueOf();
//document.getElementById("peopleIKnow").innerHTML = people.concat(otherPeople);
// console.log(people.indexOf('Mr. Hobson'));
// console.log(people.join('#'));
// console.log(people.lastIndexOf('Ms. Young'));
// console.log(people.pop());
// console.log(people.push('Teddy'));
// console.log(people.reverse());
// console.log(people.slice(1,2));
// people= people.sort();
people.splice(1,0,"Cathy");
console.log(people);