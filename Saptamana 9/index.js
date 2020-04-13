// // 1

// function customMap(array, callback) {
// 	var arr = [];
// 	for(var index in array){
// 		arr.push(callback(array[index]));
// 	}
// 	return arr;
// }
// var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];



// // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
// function increment(index) {
//     return index + 1 ;
// }
// console.log(customMap(randomArray, increment)); 

// // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
// function double(index) {
//     return index * 2 ;
// }
// console.log(customMap(randomArray, double));  


// // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
// function square(index) {
//     return index * index ;
// }
// console.log(customMap(randomArray, square));  

// 2


// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
// let filter = function(array, callback) {
//     let filteredArray = [] ;
//     for (let i = 0; i < array.length; i++) {
//         let checkIndex = array[i];
//         if (callback(checkIndex)) {
//         filteredArray.push(checkIndex);
//         }
//     }
//   return filteredArray;
// };

// function biggerThenTen(element) {
//     if(element > 10) return element
// };
// console.log(filter([20,30,40,2,3,4],biggerThenTen))




// let filter = function(array, callback) {
//     let filteredArray = array.filter(index => callback(index) );
//     return filteredArray ;
// };

// function divisibleBy3(element) {
//     if(element % 3 === 0) return element
// };
// console.log(filter([1,2,9,12,15,11],divisibleBy3))




// let filter = function(array, callback) {
//     let filteredArray = [] ;
//     for(let index of array) {
//         if(callback(index)) filteredArray.push(index)
//     };
//     return filteredArray
// };

// function oddItems(element) {
//     if(element % 2 !== 0) return element
// };
// console.log(filter([3,2,7,8,12,15,18], oddItems))




// let filter = function(array, callback) {
//     let filteredArray = array.select(index => callback(index)) ;
//     return filteredArray ;
// }
// function selectName(element) {
//     if(element[0] === "a" || element[0] === "A" ) return element ;
// }
// const randomArray = ["john", "alex", "daniel", "adam", "anna", "Anthony"] ;
// console.log(filter(randomArray, selectName))




// let filter = function(array, callback) {
//     let filteredArray = [] ;
//     for(let index of array) {
//         if(callback(index)) {
//             filteredArray = filteredArray.concat(index)
//         }
//     }
//     return filteredArray ;
// };
// function findStrings(element) {
//     for(let index of element) {
//         if(typeof index !== "string") {
//             return false
//         }
//     }
//     return true
// };
// const randomArray = [ ["john","anna"], [3,4], [8,"alex"], [NaN,false,"dino"], ["diana",0], ["liza", "sasha"] ];
// console.log(filter(randomArray, findStrings))
// Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )


// 3 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
    - an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/
// const multipleCallbacks = (object, callbackSucces, callbackError) => {
//     object.status === 'success' ? callbackSucces() : callbackError() ;
// };
// function success() {
//     let noErrorr = 'you rock it' ;
//     console.log(noErrorr) //cu return nu functioneaza
//     // return noErrorr
// };
// function error() {
//     alert('Your app has an error')
// };
// const myObject = {
//     app : 'skype',
//     memory : '2gb',
//     status : 'success'
// };
// multipleCallbacks(myObject, success, error)