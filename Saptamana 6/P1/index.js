// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {
    name: "Tesla",
    wheels: 4
} ;
car.name = "Mercedes";
delete car.name ;


//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

var salata = {
    banane: 2,
    mere: 3,
    kiwi: 2,
    iaurt: "300Gr"
} ;
var keySalata = Object.keys(salata) ;
var keySalataUpperCase = keySalata.join().toUpperCase() ;
var valSalata = Object.values(salata) ;
var valSalataLowerCase = valSalata.join().toLowerCase() ;
var result = Object.entries(salata) + " este receta pentru un mic dejun" ;


//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.
let man = {
    hobby: "dancing",
    pleasure: true ,
    smthAbout: function() {return "This object likes " + this.hobby + "? " + this.pleasure}
}


//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
} ;
let me = {
    head: 1 ,
    legs: 2,
    arms: 2,
    alive: true
} ;
let me2 = Object.assign({},me);
me2.hobby = "reading" ;
me2.country = "Ro" ;
var result = {
    ...myHouse ,
    ...me2
} 


// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
let homeTown = {
    place : {
      country: "romania" ,
      city: "iasi"
    }
} ;
var keyPlace = Object.keys(homeTown["place"]) ;
var result = JSON.stringify(homeTown["place"]).concat(" apartine obiectului place") ;


//Ex6
// Avem obiectul : 
myObject = {
    name: "John",
    surname: "Applegate",
}
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
var result = Object.values(myObject).sort(function(a,b){return myObject[a]-myObject[b]})
console.log(result)


//Ex7 
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.
function student (specialization, yearOfStart, yearOfGraduate) {
    this.specialization = specialization,
    this.yearOfStart = yearOfStart,
    this.yearOfGraduate = yearOfGraduate
}
var vasile = new student("economy",2015,2018)
var diana = new student("statistics",2017,2020)
var ion = new student("philosophy",2012,2016)
this.vasile.specialization = this.vasile.specialization.toUpperCase() ;
diana.specialization = diana.specialization.toUpperCase() ;
this.ion.specialization = this.ion.specialization.toUpperCase() ;
