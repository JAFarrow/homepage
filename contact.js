const submitButton = document.getElementById('submitButton');
const firstName = document.getElementById('formFName');
const lastName = document.getElementById('formLName');
const modalTitle = document.getElementById('modalTitle');

submitButton.addEventListener('click', () => {
    if (firstName.value != "" && lastName.value != ""){
        modalTitle.innerHTML = `Sorry ${firstName.value} ${lastName.value}!`;
    } else {
        modalTitle.innerHTML = 'Sorry!';
    }
    
});