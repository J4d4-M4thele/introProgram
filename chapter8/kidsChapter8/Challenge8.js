
// function multiply(term,numbers) {
//     for(i=0; i < term; i++) {
//         (term[i]*=numbers);
//         return term*=numbers;
//     };
// }
// function add(num1,num2) {
//     return num1 + num2;
// }
//  let answer = add(multiply(36325,9824),777);
//  console.log(answer);

//areArraysSame([1, 2, 3], [4, 5, 6]);
// // false
// areArraysSame([1, 2, 3], [1, 2, 3]);
// // true
// areArraysSame([1, 2, 3], [1, 2, 3, 4]);
// // false

function areArraysSame(array1,array2) {
    if(array1.length !== array2.length) {
        return 'false';
    }
   for (i=0; i < array1.length; i++)
  if (array1[i] !== array2[i]) {
      return 'false';
     }else {
         return 'true';
     }
};
console.log(areArraysSame([1, 2, 3], [1, 2, 3]));
console.log(areArraysSame([1, 2, 3], [4, 5, 6]));
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]));




