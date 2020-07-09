let randomButton = document.getElementById('randomNickname');
let allNamesButton = document.getElementById('allNicknames');
let nicknameDisplay = document.getElementById('nicknames');
let firstNameInput = document.getElementById('firstName');
let lastNameInput = document.getElementById('lastName');

let nicknames

randomButton.addEventListener('click', generateNickname);
allNamesButton.addEventListener('click', displayAllNicknames);

fetch('nicknames.txt').then((rawData) => rawData.text()).then((data) => {
    nicknames = data.split(',');
})

function generateNickname() {
    nicknameDisplay.innerHTML = firstNameInput.value + nicknames[randomInt(0, nicknames.length)] + lastNameInput.value;
}

function displayAllNicknames() {
    nicknameDisplay.innerHTML = '';
    for (let i = 0; i < nicknames.length; i++) {
        nicknameDisplay.innerHTML += '<p>' + firstNameInput.value + nicknames[i] + lastNameInput.value + '<p>';
    }
}