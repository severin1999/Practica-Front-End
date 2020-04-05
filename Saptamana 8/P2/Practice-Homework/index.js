//ex6
const ex6 = () => {
   let text = "" ;
   for(let i = 0;i<5;i++) {
     text+= "*" ;
     console.log(text) ;
   }
} 
let a = ex6() ;
console.log(a)


//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
   for(let i = 0;i<=numbers.length;i++) {
      if(numbers[i] < 0) {
         negativeNumbers.push(numbers[i])
      } else {continue} 
   }
   return negativeNumbers
}
console.log(extractNegativeNumbers([-1,2,-3,10,-23,31,32,-312]))


//ex8
function calculate (firstNum,secondNumb,operator) {
   switch(operator) {
      case "add" : 
         return firstNum + secondNumb ;
         break ;
      case "substract" :
         return firstNum - secondNumb ;
         break ;
      case "multiply" :
         return firstNum * secondNumb ;
         break ;
      case "divide" :
         return firstNum / secondNumb ;
         break ;
      default : 
         return "Your operator does not exist"
   }
}
console.log(calculate(3,6,"divide"))


//Ex9
function checkNum (number) {
   let result = [] ;
   if(number % 3 == 0 ) {
      if(number % 5 == 0 ) {
         result.push('both')
      } else {
         result.push('three')
      }
   } else if(number % 5 == 0 ) {
      result.push('five')
   } else {
      result.push(number)
   }
   return result.join() ;
} console.log(checkNum(13))


//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38
let date = new Date() ;
function tellDay () {
   let day = date.getDay() ;
   switch(day) {
      case 0 :
         day = "sunday" ;
         break ;
      case 1 :
         day = "monday" ;
         break ;
      case 2 :
         day = "thuesday" ;
         break ;
      case 3 :
         day = "wednsday" ;
         break ;
      case 4 :
         day = "thuesday" ;
         break ;
      case 5 :
         day = "friday" ;
         break ;
      case 6 :
         day = "saturday" ;
         break ;
      default :
         day = "i dunno"
   }
   return day
}
let timeConstructor = {
   sayDay : tellDay() ,
   sayHour : date.getHours() ,
   sayMinutes : date.getMinutes() ,
   saySeconds : date.getSeconds() ,
   sayTime : function() {
      return `Azi este : ${this.sayDay} 
Ora este : ${this.sayHour} : ${this.sayMinutes} : ${this.saySeconds}`
   }
}
let result = timeConstructor.sayTime() ;
console.log(result) ;


//Ex10 
const validPin = (pin) => {
   let pinCheck = [] ;
   let transformPinInArray = pin.split('') ;
   let arrayLength = transformPinInArray.length ;
   if(arrayLength === 4 || arrayLength === 6) {
      for(let i = 0;i<arrayLength;i++) {
         let transformInNumber = Number(transformPinInArray[i]) ;
         let checkIndex = (typeof transformInNumber) ;
         if(checkIndex === "number") {
            pinCheck.push(transformInNumber)
         }
      }
   }
   return pin == pinCheck.join('') ;
} 
console.log(validPin("173422"))

//Ex11 
function removeVowels (param) {
   return param.replace(/[aouie]/gi,"")
} console.log(removeVowels("Salut,ce mai faci ?"))

//Ex12
function isSquareNumber (number) {
   if(typeof number != "number") {
      throw new Error("it is not a number")
   }
   if(number < 0 ) {
      return false
   }
   let result = [] ;
   for(let i = 0;i<=number;i++) {
      let verify = i * i ;
      if(verify == number) {
         result.push(verify)
      }
   }
   return result.join() == number
} 
console.log(isSquareNumber(-1))


//Ex13 
function isAnagram (firstString,secondString) {
   const removeDuplicates = (array) => [...new Set(array)] ; 
   const capitalizeLetters = (array) => array.map(function (x) { return x.toLowerCase() }) ;
   let firstStringArray = firstString.replace(/\s+/g, '').split("") ;
   let secondStringArray = secondString.replace(/\s+/g, '').split("") ; 
   let firstStringUniqueLetters = removeDuplicates(firstStringArray) ;
   let secondStringUniqueLetters = removeDuplicates(secondStringArray) ;
   firstStringUniqueLetters = capitalizeLetters(firstStringUniqueLetters) ;
   secondStringUniqueLetters = capitalizeLetters(secondStringUniqueLetters) ; 
   let result = [] ;
   for(let i = 0;i<=firstStringUniqueLetters.length;i++) {
      for(let a = 0;a<secondStringUniqueLetters.length;a++) {
         if(firstStringUniqueLetters[i] == secondStringUniqueLetters[a]) {
            result.push(firstStringUniqueLetters[i])
         }
      }
   } 
   return result.join("") === firstStringUniqueLetters.join("")
} 
console.log(isAnagram("School master", "The class room"))