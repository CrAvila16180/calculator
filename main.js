const viewer = document.querySelector('.displayNum'); 
const equal = document.querySelector('.equal'); 
const nums = Array.from(document.querySelectorAll('.number')) 
const ops = Array.from(document.querySelectorAll('.operation')) 
const pendNum = document.querySelector('.prev');
const clearButton = document.querySelector('.del');
const delButton = document.querySelector('.delete');
const decimal = document.querySelector('.dot');

let theNum = "0"; 
let oldNum = ""; 
let resultNum; 
let operator; 
let complete;

const enableEqual = () => {
    equal.disabled = false;
};

const disableEqual = () => {
    equal.disabled = true;
};

const enableDel = () => {
    delButton.disabled = false;
};

const disableDel = () => {
    delButton.disabled = true;
};

const disableDecimal = () => {
    decimal.disabled = true;
};

const enableDecimal = () => {
    decimal.disabled = false;
}

disableEqual();

const addition = (x,y) => x+y;

const substraction = (x,y) => x-y;

const multiplication = (x,y) => x*y;

const division = (x,y) => x/y;

const sqrt = (x) => Math.sqrt(x);

const pow = (x,y) => Math.pow(x,y);

const factorial = (x) => {
    let total = 1;
    for(i = x; i > 0; i--){
        total *= i;
    };
    return total;
};


const setNum = (e) => {

    if(viewer.textContent == "0"){
        theNum = e.target.getAttribute('data-value');
    } else {
        theNum += e.target.getAttribute('data-value');
    }

    viewer.textContent = theNum;
    console.log(theNum);
    
};

const moveNum = (e) => {
    oldNum = theNum;
    theNum = '';
    operator = e.target.getAttribute('data-op');
    console.log(operator);
    pendNum.textContent = `${oldNum} ${e.target.textContent}`;

    equal.setAttribute("data-result", "");
    viewer.textContent = '0';
    enableDecimal();
    enableEqual();

};

const displayNumber = () => {
    oldNum = parseFloat(oldNum).toFixed(2);
    theNum = parseFloat(theNum).toFixed(2);

    switch (operator){
        case 'addition':
        resultNum = addition(oldNum,theNum).toFixed(2);
        break;

        case 'substraction':
        resultNum = substraction(oldNum,theNum).toFixed(2);
        break;

        case 'multiplication':
        resultNum = multiplication(oldNum,theNum).toFixed(2);
        break;

        case 'division':
        resultNum = division(oldNum,theNum).toFixed(2);
        break;

        case 'sqrt':
        resultNum = sqrt(theNum).toFixed(2);
        break;

        case 'pow':
        resultNum = pow(theNum).toFixed(2);
        break;

        case 'factorial':
        resultNum = factorial(theNum).toFixed(2);
        break;

        default:
        resultNum = theNum;
    };

    if (!isFinite(resultNum)){
        if (isNaN(resultNum)){
            resultNum = 'rip';
        } else {
            resultNum = 'rip';

        }
    };

    console.log(resultNum);
    pendNum.textContent += ` ${theNum}`;
    viewer.innerHTML = resultNum;
    equal.setAttribute('data-result', resultNum);
    oldNum = 0;
    theNum = resultNum;
    enableDecimal();
    complete = true;
    console.log(complete)
};

const clear = () => {
    oldNum = "";
    theNum = "";
    viewer.textContent = "0";
    pendNum.textContent = "";
    equal.setAttribute('data-result', resultNum);
};

const delChar = () => {
    if(!viewer.textContent){
        return
    }
    theNum = theNum.slice(0,-1);
    viewer.textContent = viewer.textContent.slice(0, -1);
};

const addToHistory = () => {
    const history = document.querySelector('.results');
    const item = document.createElement('div');
    const itemInput = document.createElement('div');
    const itemResult = document.createElement('div');
    history.prepend(item);
    item.classList.add('item');
    item.appendChild(itemInput);
    itemInput.classList.add('itemInput');
    item.appendChild(itemResult);
    itemResult.classList.add('itemResult');
    itemInput.textContent = pendNum.textContent;
    itemResult.textContent = viewer.textContent;
}




nums.forEach(num => num.addEventListener('click', setNum));
decimal.addEventListener('click', disableDecimal);
delButton.addEventListener('click', delChar)
ops.forEach(op => op.addEventListener('click', moveNum));
equal.addEventListener('click', displayNumber);
equal.addEventListener('click', addToHistory);
clearButton.addEventListener('click', clear);
clearButton.addEventListener('click', enableDecimal);






