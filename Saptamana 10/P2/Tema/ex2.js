// Attach a button listener to the button
// On click on the button, make an AJAX request 
//to reddit for results of cute puppies
// For each of the elements in data.children, 
//append a new <img> element to .text with the src as the child.data.thumbnail
const puppies ='https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true';

document.querySelector('button').addEventListener('click', getPuppies)

function getPuppies() {
    let request = new XMLHttpRequest();
    request.open('GET', puppies);
    request.send();

    request.onload = function() {
        let response = JSON.parse(request.responseText);
        createIMGs(response);
    }

    function createIMGs(element) {
        const replace = document.querySelector('.text');
        replace.innerHTML = '';
        let array = element.data.children;
        array.forEach( i => {
            let img = document.createElement('img');
            img.src = i.data.thumbnail;
            replace.appendChild(img)
        });
    }
};