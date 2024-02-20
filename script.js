const submitButton = document.getElementById("form__button");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email-address");
const password = document.getElementById("pass");
const fnameLabel = document.getElementById("fname");
const lnameLabel = document.getElementById("lname");
const emailLabel = document.getElementById("mail");
const passLabel = document.getElementById("secure");
const iconf = document.getElementById("icon-f");
const iconl = document.getElementById("icon-l");
const icone = document.getElementById("icon-e");
const iconp = document.getElementById("icon-p");
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function validateFirstName() {
    if (firstName.value != 0) {
        firstName.style.border = "2px solid var(--green)";
    } else {
        // Show red border
        firstName.style.border = "2px solid var(--red)";

        // Show alert message
        fnameLabel.style.visibility = "visible";

        // Show Icon
        iconf.style.visibility = "visible";
    }
}

function validateLastName() {
    if (lastName.value != 0) {
        lastName.style.border = "2px solid var(--green)";
    } else {
        // Show red border
        lastName.style.border = "2px solid var(--red)";

        // Show alert message
        lnameLabel.style.visibility = "visible";

        // Show Icon
        iconl.style.visibility = "visible";
    }
}

function validateEmail() {
    if (email.value.match(emailRegex)) {
        email.style.border = "2px solid var(--green)";
    } else {
        // Show red border
        email.style.border = "2px solid var(--red)";

        // Show alert message
        emailLabel.style.visibility = "visible";

        // Show Icon
        icone.style.visibility = "visible";
    }
}

function validatePassword() {
    if (password.value != 0) {
        password.style.border = "2px solid var(--green)";
    } else {
        // Show red border
        password.style.border = "2px solid var(--red)";

        // Show alert message
        passLabel.style.visibility = "visible";

        // Show Icon
        iconp.style.visibility = "visible";
    }
}

firstName.addEventListener("input", function () {
    iconf.style.visibility = "hidden";
    fnameLabel.style.visibility = "hidden";
    validateFirstName();
});

lastName.addEventListener("input", function () {
    iconl.style.visibility = "hidden";
    lnameLabel.style.visibility = "hidden";
    validateLastName();
});

email.addEventListener("input", function () {
    icone.style.visibility = "hidden";
    emailLabel.style.visibility = "hidden";
    validateEmail();
});

password.addEventListener("input", function () {
    iconp.style.visibility = "hidden";
    passLabel.style.visibility = "hidden";
    validatePassword();
});

submitButton.addEventListener("click", function (e) {
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();
    e.preventDefault();
});
