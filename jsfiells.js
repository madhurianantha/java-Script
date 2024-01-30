// // 1.Create a function that takes two numbers as arguments and returns their sum.
// function arguments(a,b){
//     return a+b;
//  }
//  var sum=arguments(4,3);
//  console.log(sum);
// //  2. Write a function that takes an integer minutes and converts it to seconds.
// debugger
       
// function mintosec(a){
// return a*60;

// }
// var a=+prompt("value");
// let min=mintosec(a);
// console.log(min);
// // 3.Create a function that takes a number as an argument, increments the number by +1 and returns the result.
// debugger
//             // var count=+prompt("value");
//             // count+=1;
//             // console.log(count);
//             var a=+prompt("value")
//             function sum(a){
//         return a+1;
        
//             }
//             let inc=sum(a);
//             console.log(inc);
//         //   4 .Create a function that takes the age in years and returns the age in days.
//         debugger
//         var a=+prompt("enter year of birth");
//         var b=+prompt("enter the present year");
//         var c= b-a;
//         function ageindays(c){
//             return c*365;
//         }
//         var c= ageindays(c);
//         console.log(c);
//         // 5.Create a function that takes voltage and current and returns the calculated power.
//         debugger
//         function power(v,c){
//         return v*c; // (where p=v*c)
//         }
//         var p=power(20,3); // (v in volts, c in ampers)
//         console.log(p);  // p in watts
// 6.Write a function that returns the string "something" joined with a space " " and the given argument a.
// debugger
// function space(){
        // return a+" "+b;
// }
// var a=prompt("enter the data");
// var b=prompt("enter some data");
// let c=space();
// console.log(c);

        // 7.Create a function that takes two arguments.
        //      Both arguments are integers, a and b.
        //      Return true if one of them is 10 or if their sum is 10.</p>
//         debugger
     
//      function int(a, b) {
//          if (a === 10 || b === 10) {
//             return true;
//            } else if (a + b === 10) {
//                   return true;
//             } else {
//                return false;
//           }
// }
// console.log(int(10,3));
// console.log(int(4,6));
// console.log(int(2,1));
// 8.Create a function that takes two strings as arguments and returns either
//  true or false depending on whether the total number of characters in the first 
//  string is equal to the total number of characters in the second string.
// debugger
// function strings(a,b){
//     if( a.length==b.length){
//         console.log("true");

// }else{
//         console.log("false")
// }
// }
// var a=prompt("entere the data");
// var b=prompt("entere the data equal to the data given frst");
// var totalchar=strings(a,b);
// console.log(totalchar);

// 9.Create a function that takes a name and returns a greeting in the form of a string.
//  Don't use a normal function, use an arrow function.
// function namegrt(a){
//         return a.concat(" "+b);
// }
// let b="good morning";
// let c=namegrt("madhuri");
// console.log(c);
// 10.Create a function that takes an array of 10 numbers (between 0 and 9) and returns
//  a string of those numbers formatted as a phone number (e.g. (555) 555-5555).
// debugger
// function phnno(num) {
//         if (num.length!==10) {
//                return "not a phn number ";
//         }
//         let a1 = num.slice(0, 3).join('');
//         let a2 = num.slice(3, 6).join('');
//         let a3 = num.slice(6).join('');
//         let total = `(${a1}) ${a2}-${a3}`;
//         return total;
// }

//  var num =[3,6,7,3,9,4,3,2,3,4];
// const phoneNumber = phnno(num);
// console.log(phoneNumber); 
// 11.Create a function that returns an array of strings sorted by length in ascending order.
// Example:sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]
        // let a=["a","ffff","ddddd","bbbbbbbbbbbb","ccc", "ee"];
        // a.sort(function(a, b){return a.length - b.length});
//     return a.sort();
        // console.log(a);
// 12. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// Example:findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]
// var a=[[21,3,45],[10,30,14],[3,9,96],[10,8,20]];
// var b=Math.max.apply(null,a);
// console.log(b);
// let arrs = [[23, 45, 33], [55, 66, 43], [77, 21, 12]];
// let largernums = [];

// for (let i = 0; i < arrs.length; i++) {
//   let larger = arrs[i][0];

//   for (let j = 0; j < arrs[i].length; j++) {
//     if (arrs[i][j] > larger) {
//       larger = arrs[i][j];
//     }
//   }

//   largernums.push(larger);
// }

// console.log(largernums);

// 13.Create a function that takes an array of numbers and returns the second largest number.
// Example:secondLargest([10, 40, 30, 20, 50]) ➞ 40
// debugger
// var c=[2,40,99,14,3,9,20,35];
// var b=c.sort(function(a, b){return a-b});
// console.log(b)
// var a=b[b.length-2];
// console.log(a);
// 14.Create a function that takes an array of items, removes all duplicate items and returns
//  a new array in the same sequential order as the old array (minus duplicates).
// Example:removeDups([1, 0, 1, 0]) ➞ [1, 0]; removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]
// debugger
// var a= ["hi","yes","i","can","hi","yes","you","can"];
// var b = a.filter(function(element, currentIndex) {
//       return a.indexOf(element)==currentIndex;
// });
// console.log(b);
// var a=[1,2,3,2,3,1,4,6,3,7];
// var newa= a.filter(function dup(element,currentindex) {
//         return a.indexOf(element)==currentindex;
// });
// console.log(newa);
// 15.Create a function that takes an array of integers as an argument and returns a unique number from 
// that array. All numbers except unique ones have the same number of occurrences in the array.
//  Example:findSingleNumber([2, 2, 2, 3, 4, 4, 4]) ➞ 3
// var a=[1,1,1,1,2,2,2,3,3,4,3,5,5,5];
// function findSingleNumber(arr) {
//   const frequency = {};

//   // Count occurrences of each number in the array
//   arr.forEach((num) => {
//     if (frequency[num]) {
//       frequency[num]++;
//     } else {
//       frequency[num] = 1;
//     }
//   });

//   // Find the number with only one occurrence
//   for (const key in frequency) {
//     if (frequency[key] === 1) {
//       return parseInt(key); // Convert key back to number type
//     }
//   }

//   return null; // Return null if no unique number is found
// }

// // Example usage:
// const result = findSingleNumber([2, 2, 2, 3, 4, 4, 4]);
// console.log(result); // Output: 3

// const result2 = findSingleNumber([1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 3, 5, 5, 5]);
// console.log(result2); // Output: 4


// 16.Create a function that takes two strings as arguments and returns the number of times
//  the first string (the single character) is found in the second string.
// Example:charCount("c", "Chamber of secrets") ➞ 1
// debugger
// function charCount(char, str) {
//         var count = 0;
//         for (i = 0; i < str.length; i++) {
//           if (str.charAt(i) === char) {
//             count++;
//           }
//         }
//         return count;
//       }
//       let char=(" enter the character");
//       let str=("enter the string");
      
//       console.log(charCount("c","therrecajlirecjksscuic "));
      
// function  strings(a,b){
//         return b.match(/a/gi).length;


// }
// var a=prompt("eneter the data");
// var b=prompt("eneter the data");
// var c=strings(a,b);
// console.log(c);
//17. Create a function that takes a string and returns the number 
// (count) of vowels contained within it.
// Example:countVowels("Celebration") ➞ 5
// function vowelsCount( str) {
//                 var count = 0;
// for(i=0;i<=str.length;i++){
//         if (str.charAt(i) == "A" || str.charAt(i) == "E" ||
//              str.charAt(i) == "I" || str.charAt(i) == "O" ||
//              str.charAt(i) =="U" || str.charAt(i) == "a" ||
//              str.charAt(i) == "e" || str.charAt(i) == "i" ||
//              str.charAt(i) == "o" ||str.charAt(i) == "u") {
//                             count++;
//                           }
//                         }
//                         return count;
// }
// console.log(vowelsCount("Celebration"));
// 18.Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
// Example:reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
// debugger
// function letters(a){
//         let b ="";
//         for(i=0;i<a.length;i++){
//                if(a[i]===a[i].toLowerCase()){
//                 b += a[i].toUpperCase();
//         } else {
          
//           b += a[i].toLowerCase();
//                }
//         }

//      return b;
// }

// let text =letters( "hIi Ree");
// console.log(text);
// 19.Take one integer n, loop till n and pass each value to a function, 
// create a function that takes one integer parameter, and multiply with 2 in every integer.
			// Input:      n=5 Output:   2 4 6 8 10
// Explanation:  Loop start with 1 go till 5 bcoz n=5
                // 1 x 2 =2, 2 x 2=4, 3 x 2=6 …..etc 
                // debugger
// function multiply(n){
//         for(i=1;i<=n;i++){
//              var b= i*2;
//              console.log(b); 
//         }   
// }
// let n=5;
// multiply(n);
// 20.Create Function that will take one parameter and return type of the data.
// debugger
//             function typeofdata(a){
//             return typeof a;
//             }
            
//             console.log(typeofdata("hello"));
//             console.log(typeofdata(42));
// 21.* Program to find greatest of three numbers(using ternery operator).
// Input:  4 8 2 Output: 8 is gretest
// let a=[1,20,3,12,5];
// var b=a.sort(function(a, b){return a-b});
// console.log(b);
// console.log(b[b.length - 1]);
// b = a.sort() ? console.log(b[b.length - 1]) : console.log(NaN);
// 22. Program to find factorial of number.
		// Input: n=5 Output: 120
// Explanation: 5 x 4 x 3 x 2 x 1 = 120
// debugger
// function factorial(n){
//         var b=1;
//                 for(i=1;i<=n;i++){
//                      var b=b*i;
                   
//                 } 
//                 console.log(b);   
//         }
//         let n=5;
//         factorial(n);
// 23. Program to arrange numbers in ascending order
// Input: [2,3,1,5,4] Output: [1,2,3,4,5]
// Sort the Array using loop only(you can not use predefined function).

// function sort(a){
// for( var i=0;i<a.length;i++){
//         for (var j=i+1; j < a.length; j++) {
//        if( a[j]<a[i]){
//        var temp = a[i];
//         a[i]=a[j];
//         a[j]=temp;
                
//         } 
// }  
// }
// return a;
// }
// let c=[2,3,1,4,5];
// console.log(c);
// let d=sort(c)
// console.log(sort(d));
//24 . Print Patter using loop.
// 			1
// 			1 2
// 			1 2 3
// 			1 2 3 4
//   			1 2 3 4 5
// let a=5;
// let b="";
// for(i=1;i<=a;i++){
//         for(j=1;j<=i;j++){
//         b+=j;
//                 // console.log(i);

//         }
//         b+="\n";
// }
// console.log(b);
// 25. Program to Calculate the Power of a Number(using loop only).
// Input: n=5, p=3 Output: 5 ^ 3 = 125 Explanation: 5 x 5 x 5 = 125
// debugger
// var a=5;
// let b=3;
// let c=1;
// for(i=1;i<=b;i++){
// c=c*a
// }
// console.log(c);
// 26*.Program to Check Whether a Number is Prime or Not
// Input: 9 Output: 9 is not a prime no
// Input: 7 Output : 7 is a prime no
// for(i=1;i<=10;i++){
//         if(i/1==i && i%2!==0){
//                 console.log( i +"is a prime number");
//         }else{
//                 console.log(i +"is not a prime number");
//         }

// }
// 27*.Program to find LCM of two numbers using while loop
// Input: 15 50 Output: Lcm of 15 and 50 is 150.

// 28.Program to Display Characters from A to Z Using Loop with count.

			// Output: A1 B2 C3 D4 E5 F6 ……. Z26 
//    var text = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//    var result = "";
//    for(i=0;i<text.length;i++){
//         var char= text[i];
//         var count = i + 1;
//         result += char + count + " ";
//    }
//    console.log(result);
//B. let result1=""
// let count=1
// for(i=65;i<=90;i++){
//  let char = String.fromCharCode(i);
//   result1 +=char+ count++ +" "
// }
//   console.log(result1);
// 29.Program to find a missing number
// Input:  n=5(length of array), arr= [5,3,1,4]
// Output: 2 is missing
// Using loop only(you can not use predefined function)
// var array = [1, 2, 4,6,8,5];
// var sortedArray = array.sort((a, b) => a - b);

// console.log(sortedArray);
// var missingNumbers = [];

// for (var i = 0; i < sortedArray.length; i++) {
//     if (sortedArray[i] !== i + 1) {
//         missingNumbers.push(i + 1);

//     }
// }

// console.log(missingNumbers);

// 30.Program to count vowels and consonants in a given String.
// Input: i am ram Output: 3 vowels 3 consonants.
// function vowelsCount( str) {
        //                 var count = 0;
        //                 var consonants=0;
        // for(i=0;i<str.length;i++){
        //         if (str.charAt(i) == "A" || str.charAt(i) == "E" ||
        //              str.charAt(i) == "I" || str.charAt(i) == "O" ||
        //              str.charAt(i) =="U" || str.charAt(i) == "a" ||
        //              str.charAt(i) == "e" || str.charAt(i) == "i" ||
        //              str.charAt(i) == "o" ||str.charAt(i) == "u") {
        //                             count++;
        //          }else if(str.charAt(i) == "B" || str.charAt(i) == "C" ||
        //          str.charAt(i) == "D" || str.charAt(i) == "F" ||  str.charAt(i) =="G" || str.charAt(i) == "H" ||
        //         str.charAt(i) == "J" || str.charAt(i) == "K" || str.charAt(i) == "L" ||str.charAt(i) == "M"||
        //         str.charAt(i) == "N" || str.charAt(i) == "P" || str.charAt(i) == "Q" || str.charAt(i) == "R" ||
        //         str.charAt(i) =="S" || str.charAt(i) == "T" || str.charAt(i) == "V" || str.charAt(i) == "W" ||
        //         str.charAt(i) == "X" ||str.charAt(i) == "Y"|| str.charAt(i) == "Z" || str.charAt(i) == "b" ||
        //         str.charAt(i) == "c" || str.charAt(i) == "d" || str.charAt(i) =="f" || str.charAt(i) == "g" ||
        //         str.charAt(i) == "h" || str.charAt(i) == "j" ||str.charAt(i) == "p" || str.charAt(i) == "q" ||
        //         str.charAt(i) == "k" ||str.charAt(i) == "l"||str.charAt(i) == "m" || str.charAt(i) == "n" ||
        //          str.charAt(i) =="r" || str.charAt(i) == "s" ||str.charAt(i) == "t" || str.charAt(i) == "v" ||
        //         str.charAt(i) == "w" ||str.charAt(i) == "x"|| str.charAt(i) == "y" ||str.charAt(i) == "z"){
        //                         consonants++;
        //                               }
        //                         }
        //                         console.log(consonants);
        //                         return count;
                        
        // }
        // console.log(vowelsCount("Celebration"));
//       31.  program to insert  the elements of an array for specific index.
//   Input: [1,2,3,4,5,7,8,9,10] , index=5        Output: [1,2,3,4,5,6,78,9,10]

// var Input= [1,2,3,4,5,7,8,9,10];
// Input.splice(5,0,6);
// console.log(Input);
// 32. Reverse a number using while Loop Input: 123 Output: 321
// debugger
// let text = "123";
// let i =text.length-1;
// let reverse="";
// while (i >= 0) {
//         reverse += text.charAt(i);
//   i--;
// }
// console.log(reverse);
// 33.Count occurrence of number:
// Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7 Output: 7 present 2 times.
//  let input=[1,6,3,1,5,9,7,2,1,9,3,7,8,9,10];
//  let count1=0;
//  let a=7;
//  for(i=0;i<input.length;i++){
//         if(input[i]===7){
// count1++;
//         }
//  }
//  console.log(a + " present " + count1+ " times.");
                                //     medium level problems

// 1. Write a function that converts an object into an array,
//  where each element represents a key-value pair in the form of an array.
// Examples :toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots",12]] , toArray({}) ➞ []
// function covertarray() {
//         let char = { 
//           a: 1, 
//           b: 2,
//           shrimp: 15,
//           tots: 12 
//         };
      
//         let arr = Object.entries(char);
//         return arr;
//       }     
//    let result = covertarray();
//       console.log(result);

//       function covertarray() {
//         let arr = [];
//         let char = { a: 1, b: 2, shrimp: 15, tots: 12 };
      
//         for (const key in char) {
//           arr.push([key, char[key]]);
//         }
      
//         return arr;
//       }
      
//       let result = covertarray();
//       console.log(result);

// 2.Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples : arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
// function arrayOfMultiples(num, length){
//         let count=1;
//         let arr=[];
//         for(i=0;i<length;i++){
//                let multiples=num*count++;
//                arr.push(multiples);
        
//         }
//         return arr;
// }
// let result=arrayOfMultiples(7, 5);
// let result2=arrayOfMultiples(12, 10);
// let result3=arrayOfMultiples(17, 6);
// console.log(result);
// console.log(result2);
// console.log(result3);
/*3.Create the function that takes an array with objects and returns the sum of people's budgets.
Examples :
getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700
getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
// ]) ➞ 62600*/
// function sum(){
//          const myObj = {
//            getBudgets:[{ name: "John", age: 21, budget: 23000 },
//                        { name: "Steve",  age: 32, budget: 40000 },
//                        { name: "Martin",  age: 16, budget: 2700 }] }
//                        let budgets = myObj.getBudgets;
//                        let totalBudget = 0;
                     
//                        for (let i = 0; i < budgets.length; i++) {
//                          totalBudget += budgets[i].budget;
//                        }
                     
//                        return totalBudget;
//                      }
                     
//                      let total = sum();
//                      console.log(total);

/*  4.Create a function that takes an array of objects like { name: "John",
 notes: [3, 5, 4]} and returns an array of objects like { name: "John", avgNote: 4 }.
 If a student has no notes (an empty array) then let's assume avgNote: 0.
	Example :

[
  { name: "John", notes: [3, 5, 4]}
] ➞ [
  { name: "John", avgNote: 4 }
]/*







/*5.Create a function that moves all capital letters to the front of a word.
	Examples :

capToFront("hApPy") ➞ "APhpy"

capToFront("moveMENT") ➞ "MENTmove"

capToFront("shOrtCAKE") ➞ "OCAKEshrt"*/

// function captofront(b) {
//   let a = "";
//   let c = "";

//   for (let i = 0; i < b.length; i++) {
//     if (b[i] === b[i].toUpperCase()) {
//       a += b[i];
//     } else {
//       c += b[i];
//     }
//   }

//   return a + c;
// }

// let result = captofront("hApPy");
// console.log(result);
// console.log(captofront("shOrtCAKE"));
// console.log(captofront("moveMENT"));

/*    6.Count each occurrence of number(can not use predefined function).

			Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no find=7
			Output: 1 present 2 times.
				   2 present 1 times.
				   3 present 2 times.
				   5 present 1 times …….  Etc*/
//      let Input= [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] ;
// let count={};
// for (let i = 0; i < Input.length; i++) {
//         let num = Input[i];
//         if (count[num] === undefined) {
//           count[num] = 1;
//         } else {
//           count[num]++;
//         }
//       }
      
//       for (let num in count) {
//         console.log(`${num} present ${count[num]} times.`);
//       }

/* 7.Write a function that accepts an array of strings.
 Return the longest string(can not use predefined function).
	Input: [‘nik’, ’mikhil’, ’Cow’,’Elephant’] 	Output: Elephant*/
  // function array(b) {
  //   let maxLength = 0;
  //   let maxElement = "";
  
  //   for (let i = 0; i < b.length; i++) {
  //     let currentLength = b[i].length;
  //     // console.log(currentLength);
  
  //     if (currentLength > maxLength) {
  //       maxLength = currentLength;
  //       maxElement = b[i];
  //     }
  //   }
  
  //   return maxElement;
  // }
  
  // let b = ["nik", "mikhil","Elephant", "Cow" ];
  // console.log(array(b));
 /*8. Most Commonly Used two Character in String(can not use predefined function)
Input: ‘Hii i am ram’   Output; i, a */
// function twochar(input){
//   let count1=0;
//   for(i=0;i<input.length;i++){
//     if(input[i]===7){
// count1++;
//     }
// }
// }
// let input=["Hii i am ram" ];
/*9.  Write Program to remove duplicate elements in an array and sort it in descending 
order(can not use predefined function).
	Input: [5,3,5,2,1,1,7,3,5,6]	Output: [7,6,5,32,1]*/

// let Input= [5,3,5,2,1,1,7,3,5,6]
// result=Input.sort(function(a, b){return b - a})
// // console.log(result);
// var empty=[];
// for (i=0;i<result.length;i++){
 
//   if(!empty.includes(result[i])){
//     // empty +=result[i];
//     empty.push(result[i]);
//   }
// }
// console.log(empty);
//10. Write a Program to Remove brackets from an algebraic 
// expression(can not use predefined function).
	// Input: a + b-(9+c)=3	Output: a + b- 9+c=3
  // let input = "a + b-(9+c)=3";
  // let result = "";
  
  // let bracketDepth = 0; // To keep track of nested brackets
  
  // for (let i = 0; i < input.length; i++) {
  //   if (input[i] === "(") {
  //     bracketDepth++;
  //   } else if (input[i] === ")") {
  //     bracketDepth--;
  //   } else if (bracketDepth === 0) {
  //     result += input[i];
  //   }
  // }
  
  // console.log(result);
 /*11. Write Program to remove duplicate elements in an array and sort it in Accending
   order(can not use predefined function).
	Input: [Z, A, P, C, A, Z , K, N, C] Output: [A, C, K,N, P, Z]*/
//   var Input = ['Z', 'A', 'P', 'C', 'A', 'Z', 'K', 'N', 'C'];

//  result=Input.sort()
//  // console.log(result);
//  var empty=[];
//  for (i=0;i<result.length;i++){
  
//    if(!empty.includes(result[i])){
//      // empty +=result[i];
//      empty.push(result[i]);
//    }
//  }
//  console.log(empty);
 /* 12.If subseq's  array  sequence is present in the array, returns true or else returns false.                                                    
 Let arr = [5, 7, 3, 2, 2, 7,-1, 5, -3, 13, 4]
 Example:   Input : Subseq1 = [7, -1, 5, -3] Output:  true
                       Subseq2 = [7, -1, 4, -3]            : false
            Subseq3 = [ -1]                        : true
                       Subseq4 = [13, -3, 4, 1]           : false */

 