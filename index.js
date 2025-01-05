const characters = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=",
    "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

// DOM elements
const generatePasswordsEl = document.getElementById("generate-passwords-btn");
const password1El = document.getElementById("password-1");
const password2El = document.getElementById("password-2");
const clickMsgEl = document.getElementById("click-msg");
const resultsSectionEl = document.querySelector(".results-section");

// Password variables
let password1 = "";
let password2 = "";
const passwordLength = 15;

// Generate passwords
function generatePasswords() {
    reset(); // Clear passwords first

    for (let i = 0; i < passwordLength; i++) {
        password1 += characters[Math.floor(Math.random() * characters.length)];
        password2 += characters[Math.floor(Math.random() * characters.length)];
    }

    // Display the generated passwords
    password1El.textContent = password1;
    password2El.textContent = password2;
}

// Copy first password to clipboard
function copyPassword1() {
    if (password1) {
        console.log(password1);
        navigator.clipboard.writeText(password1);
    } else {
        console.warn("Password 1 is empty!");
    }
}

// Copy second password to clipboard
function copyPassword2() {
    if (password2) {
        console.log(password2);
        navigator.clipboard.writeText(password2);
    } else {
        console.warn("Password 2 is empty!");
    }
}

// Reset function
function reset() {
    // Reset password variables
    password1 = "";
    password2 = "";

    // Clear text content
    password1El.textContent = password1;
    password2El.textContent = password2;

    // Unhide click message and results section
    if (clickMsgEl.classList.contains("hidden")) {
        clickMsgEl.classList.remove("hidden");
    }
    if (resultsSectionEl.classList.contains("hidden")) {
        resultsSectionEl.classList.remove("hidden");
    }
}

// Attach event listener
generatePasswordsEl.addEventListener("click", generatePasswords);
password1El.addEventListener("click", copyPassword1);
password2El.addEventListener("click", copyPassword2);



