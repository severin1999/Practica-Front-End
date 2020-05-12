// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family 
// "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) 
// cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem".
//  Adaugati un tag style(in head) care seteaza o regula pentru 
// .listitem sa aiba culoarea rosie
// Creati un element img si setati 
// atributul src sa aiba o poza cu voi sau ceva random de pe net.
//  Puneti acest element(append) la pagina noastra

[...document.getElementsByTagName('body')]
.forEach( i => i.style.fontFamily = 'Arial, sans-serif');

document.getElementById('name').innerHTML = 'Vitalie';
document.getElementById('fav-drink').innerHTML = 'Vodka';
document.getElementById('born-place').innerHTML = 'Moldova';

[...document.querySelectorAll('li')]
.forEach( i => i.classList = 'listitem');

let styleTag = document.createElement('style');
styleTag.textContent = '.listitem {color : red}';
document.querySelector('head').appendChild(styleTag); 

let imagine = document.createElement('img');
imagine.src = 'AP_16252211072121.jpg';
imagine.style.width = '300px'
document.querySelector('body').appendChild(imagine);