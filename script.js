function showPassword() {
    const showPasswordCheckbox = document.getElementById('showPasswordCheckbox');
    const inputPassword = document.getElementById('inputPassword');

    if (showPasswordCheckbox.checked) {
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
}

function testPasswordStrenth() {
    const inputPassword = document.getElementById('inputPassword').value;
    const passwordStrength = document.getElementById('passwordStrength');
    const passwordContainer = document.querySelector('.password-container');

    let strength = 0;

    if (inputPassword.match(/[a-z]+/)) {
        strength += 1;
    }

    if (inputPassword.match(/[A-Z]+/)) {
        strength += 1;
    }

    if (inputPassword.match(/[0-9]+/)) {
        strength += 1;
    }

    if (inputPassword.match(/[$@#&!]+/)) {
        strength += 1;
    }

    if (inputPassword.length === 0 ) {
        passwordStrength.textContent = 'No Password';
        passwordContainer.style.backgroundColor = 'rgb(200, 200, 200)';
    } else if (inputPassword.length < 6) {
        passwordStrength.textContent = 'Your password is Weak!';
        passwordContainer.style.backgroundColor = 'rgb(250, 80, 80)';
    } else if (inputPassword.length < 10 || strength < 3) {
        passwordStrength.textContent = 'Your password is Good!';
        passwordContainer.style.backgroundColor = 'rgb(231, 215, 43)';
    } else {
        passwordStrength.textContent = 'Your password is Strong!';
        passwordContainer.style.backgroundColor = 'rgb(69, 208, 38)';
    }
}

function testPasswordCrackTime() {

    const inputPassword = document.getElementById('inputPassword').value;

    let combinationsPerSecond = 1000000000; // Assumption only
    let passwordEntropy = calculatePasswordEntropy(inputPassword);
    let crackTimeInSeconds = Math.pow(2, passwordEntropy) / combinationsPerSecond;

    let formattedCrackTime = formatTime(crackTimeInSeconds);
    document.getElementById('crackTime').textContent =  formattedCrackTime;        
}

function calculatePasswordEntropy(inputPassword) {
    let characterSetSize = 72; // Assumption for the total mix letters and numbers
    let passwordLength = inputPassword.length;
    return passwordLength * Math.log2(characterSetSize);
}

function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    seconds = Math.floor(seconds % 60);
    
    return hours + 'hr ' +  minutes + 'min ' + seconds + 'sec '
}

function testPassword() {
    testPasswordStrenth();
    testPasswordCrackTime();
}