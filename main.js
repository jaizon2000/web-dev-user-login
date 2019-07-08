/*
Check proper sign in credentials
*/

// Event listener
document.getElementById('btn').addEventListener('click', main);

// Fnction
function main() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // SUCCESS
    if (username == 'jaizon2000' && password == '1') {
        alert('Sign In Successful');
    
    // WRONG
    } else{
        alert('Sign In Unsuccessful')
        document.getElementById('greet').innerHTML = 'Wrong username and/or password.<br>Please try again.';
        document.getElementById('greet').style.color = 'red';

    }
}