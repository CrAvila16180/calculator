const prev = document.querySelector('.prev');
const result = document.querySelector('.result');

const btnNumbers = document.querySelectorAll('.number');

let number = '';
const getValue = (e) => {
    
    let value = e.target.getAttribute('data-value')

    number += value;
    result.textContent = number;
    console.log(result.textContent)
};

let firstNum = () => {
    let firstvalue = Number(result.textContent);
    console.log(firstvalue)
    return firstvalue;
}


btnNumbers.forEach(number => number.addEventListener('click', getValue))
btnNumbers.forEach(number => number.addEventListener('click', firstNum))