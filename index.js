// Stack Learner YT # 060 : Defining a function: 

// function functionName () {
//     console.log("I am a Function.")    
// }

// function add() {
//     a = 30;
//     b = 20;
//     console.log (a + b);
// }

// function subtract() {
//     a = 30;
//     b = 20;
//     console.log (a - b);
// }

// // Stack Learner YT # 061: Invoking a function :

// // functionName()
// // add()
// // subtract()

// for (var i = 0; i < 10; i ++){
//     functionName()
// }

// 062: Function Arguments and Parameters in JS:

// Ex. 1

// function add( a, b) {
//     var result = a + b;
//     console.log (result)    
// }

// add (10 , 20)
// add (500 , 700)
// add (-5 , -7)
// add (-5 , 7)


// Ex. 2

// function  sub (a , b) {
//     var result = a - b;
//     console.log (result);
// }

// sub (100 , 70);


// Ex. 3

// var arr1 = [1 , 2 , 3]
// var arr2 = [5 , 7 , 9]
// var arr3 = [9 , 7 , 1]

// var sum1 = 0;
// for (var i = 0; i < arr1.length; i ++){
//     sum1 += arr1[i]
// }
// console.log (sum1);

// var sum2 = 0;
// for (var i = 0; i < arr2.length; i ++){
//     sum2 += arr2 [i]
// }
// console.log(sum2);

// var sum3 = 0;
// for (var i = 0; i < arr3.length; i ++){
//     sum3 += arr3 [i]
// }
// console.log(sum3);

// function sumOfArray (arr){
//     var sum = 0
//     for (var i = 0; i < arr.length; i ++){
//         sum += arr [i]
//     }
//     console.log(sum)
// }

// sumOfArray (arr1)
// sumOfArray (arr2)
// sumOfArray (arr3)


// # 063 : Argument Object

// Ex. 1

// function text(a , b , c) {
//     // console.log (arguments)
//     // console.log (JSON.stringify....)

//     for (var i = 0; i < arguments.length; i ++){
//         console.log(arguments [i])
//     }
    
// }
// text (10 , 20 , 30)

// Ex. 2

// function addAll () {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i ++){
//         sum += arguments [i];
//     }
//     console.log (sum)
// }
// addAll (1, 2, 3)
// addAll (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)


// # 064 : Return Something from a Function in JS:

// Ex. 1 

// function addAll() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i ++){
//         sum += arguments [i];
//     }
//     return sum;
// }
// var result = addAll (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
// console.log(result);

// Ex. 2

function person(name, email) {
    return {
        name : name,
        email : email
    }
}
var p1 = person ('Amima Hoque Chy', 'sas....@gmail.com');

console.log (p1);