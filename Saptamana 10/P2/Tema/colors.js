const url = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';

let div = document.getElementById('colors');
let myRequest = new XMLHttpRequest();
myRequest.open('GET', url);
myRequest.send();

myRequest.onload = function() {
    let myResponse = JSON.parse(myRequest.responseText);
    myResponseInner(myResponse);
};

const myResponseInner = obj => {
    let myList = document.createElement('ul');
    for(let index in obj) {
        let listItem = document.createElement('li');
        // listItem.style.listStyle = 'none';
        listItem.textContent = `${index} : ${obj[index]}`;
        listItem.style.backgroundColor = obj[index];
        myList.appendChild(listItem);
    };
    div.appendChild(myList);
};

