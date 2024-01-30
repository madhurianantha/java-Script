// var a= prompt(" enter the arithematic value");
// // console.log(a);
// var b = prompt (" enter the value");
// // console.log(b);
// var c = prompt (" enter the value");
// // console.log(b);
//     let result;
//     switch(a){
    
//     case +:
//         result= c+b;
//        break;
//     case -
//         result= c-b;
//         break;
//     case '*':
//         result= c*b;
//         break;
//     case '/':
//             result =c/b;
//             break;
//     case '**':
//                 result =c**b;
//                 break;

//     default :
//        alert("enter only from arthimetic values");
//     }
//     console.log(result);
  
// arithematic opp
const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = prompt('Enter first number: ');
const number2 = prompt('Enter second number: ');

switch(operator) {
    case '+':
        console.log(number1 + number2 );
        break;
    case '-':
        console.log(number1 - number2 );
        break;
    case '*':
        console.log(number1 * number2 );
        break;
    case '/':
        console.log(number1 / number2 );
        break;

    default:
        console.log('Invalid operator');
        break;
}
// prime nummber

// function hi(){
//     var a=promt("enter the value");
//     var b=prompt(" enter the value");
//     return a+b;

// }
// var c=hi();
// console.log(c);
// var d=hi();
// console.log(d);
// var e=hi();
// console.log(e);
// var f=hi();
// console.log(f);