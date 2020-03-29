// EX1

for(var i = 0;i <= 20;i++) { //atat timp cat i este mai mic sau egal cu 20,incepand de la 0 si creste cu 1,se va executa urmoatoarea :
    i % 2 == 0 ? console.log(i + " este nr par") : console.log( i + " este nr impar") //daca i impartit la 2 da rest 0 este adevarat 
} //va afisa i este nr par,daca fals,atunci se va afisa i este nr impar

var i = 0 ; 
while(i <= 20) {
  i % 2 == 0 ? console.log(i + " este nr par") : console.log( i + " este nr impar") ;
  i++
}


// EX2

for(var i = 0;i <= 10;i++) { ////atat timp cat i este mai mic sau egal cu 10,incepand de la 0 si creste cu 1,se va executa urmoatoarea :
    var result = i * 9 ; //stocam rezultatul i * 9 in alta variabila result
    console.log(i.toString() + " * 9 = " + result) //convertim i in string pentru a putea concatena 
}

var i = 0 ;
while(i <= 10) {
  var result = i * 9 ;
  console.log(i.toString() + " * 9 = " + result) ;
  i++
}


EX3

function ex3 (param) {
    var i = 0;
    while(param <= 10) {
      if(i <= 10) {
       var result = param * i ;
       console.log(param.toString() + " * " + i + " = " +  result) ;
       i++ ; 
    } else {return}
   }   
}
console.log(ex3(3))
function ex3 (param) {
 for(var i=0;i<=10;i++) {
   var result = param * i ;
   console.log(param + " * " + i + " = " +  result) 
 }
}
console.log(ex3(2))


EX4

let decide_rating = function (the_score) {
  function rating () {
    if (the_score < 4) {return "E"} 
    else if (the_score >= 4 && the_score <= 6) {return "D"} 
    else if (the_score >= 7 && the_score <= 8) {return "B"}
    else if (the_score == 9) {return "A"}
    else if (the_score == 10) {return "A+"}
    else {return "gresit"}
  }
  return "Calificativul corespunzator punctajului " + the_score + " este " + rating()
}
for(var i = 0;i<=10;i++) {
console.log(decide_rating(i))
}