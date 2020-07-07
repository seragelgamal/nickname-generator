let nicknames = [' "Cowboy" ', ' "Buck" ', ' "Bone" ', ' "Flip" ', ' "Clem" ', ' "JR" ', ' "Penny" ', ' "Spike" ', ' "Big Dawg" ', ' "Slime" '];
let randomButton = document.getElementById('randomNickname');
let allNamesButton = document.getElementById('allNicknames');
let nicknameDisplay = document.getElementById('nicknames');
let firstNameInput = document.getElementById('firstName');
let lastNameInput = document.getElementById('lastName');

randomButton.addEventListener('click', generateNickname);
allNamesButton.addEventListener('click', displayAllNicknames);

function generateNickname() {
    nicknameDisplay.innerHTML = firstNameInput.value + nicknames[randomInt(0, nicknames.length)] + lastNameInput.value;
}

function displayAllNicknames() {
    nicknameDisplay.innerHTML = '';
    for (let i = 0; i < nicknames.length; i++) {
        nicknameDisplay.innerHTML += '<p>' + firstNameInput.value + nicknames[i] + lastNameInput.value + '<p>';
    }
}