// Ex1 

function check_string (param) {
    var result = typeof(param) === "string" ;
    return result
}


// Ex2 

function check_empty (param) {
    var result = param === "" ;
    return result
}


// Ex3 

function to_array (param) {
    var result = param.split() ;
    return result
}


// Ex4

function abrev_name (param) {
    var result = (param.split(" "))[0] ;
    var result2 = (param.split(" ").pop())[0] + "." ;
    var name = result + " " + result2 ;
    return name
}


// Ex5

function capitalize (param) {
    var result = (param.charAt(0)).toUpperCase() + param.slice(1) ;
    return result
}


// Ex6

function truncate_string (phrase,number) {
    var result = phrase.slice(0,number) ;
    return result
}


// Ex7

function isLowerCase (phrase,number) {
    var letter = phrase.charAt(number) ;
    var result = letter == letter.toLowerCase() ;
    return result
}


// Ex8

function insert (phrase1,phrase2,number) {
    var result = phrase1.substring(0,number) + " " + phrase2 + phrase1.substring(number) ;
    return result
}


// Ex9

function remove_first_occurrence (phrase,letter) {
    var long = letter.length ;
    var position = phrase.indexOf(letter) ;
    var result = phrase.slice(0,position) + phrase.slice(long+position+1) ;
    return result
}


// Ex10

function compare_strings (param1,param2) {
    var result = param1.toUpperCase() == param2.toUpperCase() ;
    return result
}


// Ex11

function uncapitalize (param) {
    var first_part = param.slice(1) ;
    var result = param.charAt(0).toLowerCase() + first_part ;
    return result
}