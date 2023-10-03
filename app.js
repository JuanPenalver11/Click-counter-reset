// variables 

const btnCount = document.querySelector('.btnCount');
const btnReset = document.querySelector('.btnReset');
const displayNumber = document.querySelector('.displayNumber');


// Function to count and reset 

function counter() {

    let count = 0;

    btnCount.addEventListener('click', function () {
        count++
        displayNumber.innerHTML = count;
    });

    btnReset.addEventListener('click', function () {
        count = 0;
        displayNumber.innerHTML = count;
    });

}

counter()



