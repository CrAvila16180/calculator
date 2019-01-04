let viewer = document.querySelector('.displayNum'); //Where numberis displayed
let equal = document.querySelector('.equal'); //Equal button
let nums = Array.from(document.querySelectorAll('.number')) //NUmber buttons
let ops = Array.from(document.querySelectorAll('.operation')) //ops buttons

let theNum = ""; //Current number
let oldNum = ""; //First Number
let resultNum; //result
let operator; 

let setNum = (e) => {

    if (resultNum) {
        theNum = e.target.getAttribute('data-value');
    } else {
        theNum += e.target.getAttribute('data-value');
    }

    viewer.textContent = theNum;
    console.log(this)
}

nums.forEach(num => num.addEventListener('click', setNum))






