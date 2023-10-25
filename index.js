function validateForm() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;

    if (fname == '' || lname == '' || email == '') {
        alert('Please fill in all fields');
        return false;
    }
    return true;
}