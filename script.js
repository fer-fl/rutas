document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('SignUpForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const paragraph = document.getElementById('warning');

    form.addEventListener("submit", e => {
        e.preventDefault();
        let warnings = "";
        paragraph.innerHTML = "";
        let submit = true;
        let regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // username
        if (username.value == "") {
            warnings += 'Invalid username';
            submit = false;
        } else if (username.value.length < 6) {
            warnings += 'Username must be at least 5 characters<br>';
            submit = false;
        }

        // email
        if (!regExEmail.test(email.value)) {
            submit = false;
            warnings += 'Invalid email<br>';
        }

        // password
        if (password.value.length < 8) {
            warnings += 'Incorrect password<br>';
            submit = false;
        } else if(password.value == ""){
            warnings += 'Incorrect password<br>';
            submit = false;
        }

        if (password2.value.length < 8 || password2.value == "") {
            warnings += 'Incorrect password confirmation<br>';
            submit = false;
        }

        if (password.value !== password2.value) {
            warnings += 'Passwords do not match<br>';
            submit = false;
        }

        // submit
        if (submit) {
            paragraph.innerHTML = "Sent";
        } else {
            paragraph.innerHTML = warnings;
        }
    });
});