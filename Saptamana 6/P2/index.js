// EX1

//Variabila first_number converteste cnp-ul intr-un string iar mai apoi imparte caracterele in alte multe stringuri
//preia primul string(de pe pozitia 0) care este cifra care spune daca persoana este M/F
//daca cifra respectiva se imparte la 2 fara rest atunci este de gen feminin
//in caz contrar este masculin

function check_sex (cnp) {
    var first_number = cnp.toString().split("")[0] ;
    if (first_number % 2 != 0) {
      return "Persoana verificata este de sex Masculin"
    } else {
      return "Persoana verificata este de sex Feminin"
    }
}


// EX2

//Punctajul dat in parametru the_score este preluat in functia rating
//unde in dependenta de valorile setate in conditiile if-urilor returneaza un calificativ
//variabila decide_rating returneaza fraza finala formata dintr-un string+punctajul dat la parametru functiei+calificativul returnat de mai sus

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


// EX3 

var cars = function (the_car) {
    var country ;
    switch (the_car) {
        case "dacia":
            var country = "romania" ;
            break ;
        case "lamborghini":
        case "ferrari":
        case "alfa romeo":
        case "fiat":
        case "maserati":
            var country = "italy" ;
            break ;
        case "bmw":
        case "mercedes-benz":
        case "audi":
        case "porsche":
        case "volkswagen":
        case "opel":
            var country = "germany" ;
            break ;
        case "renault":
        case "peugeot":
        case "citroen":
            var country = "france" ;
            break ;
        case "toyota":
        case "nissan":
        case "honda":
            var country = "japan" ;
            break ;
        default:
            var country = 0 ;
        }
    if (country == 0) {return "Marca necunoscuta"}
    else {return "Marca " + the_car + " se produce in " + country}
}


// function cars (the_car) {
//     var country ;
//     function romania () {
//         return country = "romania"
//     }
//     function italy () {
//         return country = "italy"
//     }
//     function germany () {
//         return country = "germany"
//     }
//     function france () {
//         return country = "france"
//     }
//     function japan () {
//         return country = "japan"
//     }
//     var cars_list = {
//         "dacia" : romania,
//         "lamborghini": italy,
//         "ferrari": italy,
//         "alfa romeo": italy,
//         "fiat": italy,
//         "maserati": italy,
//         "bmw": germany,
//         "mercedes-benz": germany,
//         "audi": germany,
//         "porsche": germany,
//         "volkswagen": germany,
//         "opel": germany,
//         "renault": france,
//         "peugeot": france,
//         "citroen": france,
//         "toyota": japan,
//         "nissan": japan,
//         "honda": japan

//     } ;
//     return cars_list[the_car]()
// }

