const buttonContainer = document.querySelector('.button-container');
const displayNumber = document.querySelector('.displayNumber');

let count = 0;

buttonContainer.addEventListener('click', function (e) {
    const target = e.target;

    if (target.classList.contains('btnAdd')) {
        count++;
    } else if (target.classList.contains('btnReset')) {
        count = 0;
    } else if (target.classList.contains('btnSubs')) {
        count--;
    }

    displayNumber.innerHTML = count;
});






