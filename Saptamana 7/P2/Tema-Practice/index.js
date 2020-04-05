//Ex4
// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"
function ex4 (param,number) {
  var result = param ;
  for(var i = number;i>1;i--) {
    result += param ;
  }
  return result
}

//Ex5
// A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
// Scrieti o functie care verifica daca un string este palindrom
function ex5 (param) {
  var result = param.split("").reverse().join("") ;
  if(param === result) {
    return "este polindrom"
  } else {
    return "nu este polindrom"
  }
}

//Ex6
// Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
//contine ca si elemente cele mai mari numere din fiecare array
function ex6 (param) {
  var result = [] ;
  for(var i = 0 ; i<param.length ; i++) {
    var a = param[i].sort(function(a,b){return b-a}) ;
    result.push(a[0]) ;
  }
  return result
}

//Ex7
// Implementati o functie care face reverse la un string
function ex7 (param) {
  var result = param.split("").reverse().join("") ;
  return result
}

//Ex8 
// Implementati o functie care calculeaza factorialul unui numar
function ex8 (param) {
  for (var i = param - 1; i >= 1; i--) {
   param *= i; 
  }
 return param ;
}

//Ex9
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
function ex9 (param1,param2) {
  var a = param1.split(' ').reverse() ;
  if(a[0] === param2) {
    return true
  } else {
    return false
  }
}

//Ex11
// Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
//string
function ex11 (param1,param2) {
  var a = param1.split("") ;
  var b = param2.split("") ; 
  var result = [] ;
  for(var i1 = 0;i1<=b.length - 1;i1++) {
    for(var i2 = 0;i2<=a.length;i2++) {
      if(b[i1] === a[i2]) {
        result.push(b[i1])
      }
    }
  }
  if(result.join("") == param2) {
    return "primul string contine toate literele din al 2-lea" ;
  } else {
    return "primul string nu contine toate literele din al 2-lea" ;
  }
}

// Ex 12
// Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
//cand intalneste elementul cu valoarea specificata
function ex12 (myArray,myValue) {
  for(var i = 0;i<=myArray.length;i++) {
    if(myArray[i] != myValue) {
      console.log(myArray[i]) 
    } else {break}
  }
}

// Ex 13
// Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
function ex13 (param) {
  var result = [] ;
  for(var i = 0;i<=param.length;i++) {
    if(param[i]) {
      result.push(param[i])
    } else {continue}
  } return result
}

// Ex 14
// Scrieti o functie care repeta un string de n ori specificate
function ex14 (param,number) {
  for(var i=1;i<=number;i++) {
    console.log(param)
  }
}