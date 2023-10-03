// variables 

const btnAdd = document.querySelector('.btnAdd');
const btnReset = document.querySelector('.btnReset');
const btnSubs = document.querySelector('.btnSubs')
const displayNumber = document.querySelector('.displayNumber');


// Function to count and reset 

function counter() {

    let count = 0;

    btnAdd.addEventListener('click', function () {
        count++
        displayNumber.innerHTML = count;
    });

    btnReset.addEventListener('click', function () {
        count = 0;
        displayNumber.innerHTML = count;
    });

    btnSubs.addEventListener('click', function(){
        count--
        displayNumber.innerHTML = count; 
    })

}

counter()



