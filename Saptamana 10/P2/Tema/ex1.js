const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

function giveQuote() {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.onload = function() {
        let response = JSON.parse(request.responseText);
        document.getElementById('quote').textContent = response;
    };
};
document.getElementById('xhr').addEventListener('click', giveQuote)