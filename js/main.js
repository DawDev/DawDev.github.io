
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const successElem = document.querySelector('.success-text');


checkboxes.forEach(box => {
    box.addEventListener('change', () => {
        if (checkAllBoxes()) {
            showSuccess();
        } else {
            hideSuccess();
        }
            
    });
});


function hideSuccess() {
    successElem.classList.add('visually-hidden');
}


function showSuccess() {
    successElem.classList.remove('visually-hidden');
}


function checkAllBoxes() {
    let allChecked = true;
    checkboxes.forEach(box => {
        if (!box.checked) {
            allChecked = false;
        }
    });
    return allChecked;
}
