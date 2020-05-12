function showError() {
    //check username
    const username = document.getElementById('username').value;
    let check = username.match(/[^A-Za-z0-9]+/);
    if( check !== null || username.length < 4) {
        document.getElementById('error_username').style.display = 'block';
    };

    //check email
    const email = document.getElementById('email').value;
    let symbols = ['@', '.'];
    if( symbols.includes(email) === false ) {
        document.getElementById('error_email').style.display = 'block';
    };

    //check firstName and lastName
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    if( fName.length === 0 ) {
        document.getElementById('error_fname').style.display = 'block';
    };
    if( lName.length === 0 ) {
        document.getElementById('error_lname').style.display = 'block';
    };

    //check phoneNumber
    const phoneNumber = document.getElementById('phone').value;
    if( phoneNumber.length > 9) {
        document.getElementById('error_phone').style.display = 'block';
    }

}
document.getElementById('button').addEventListener('click', showError);
