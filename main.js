//HTML Buttons

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

//Enables and disables buttons

const enableOps = () => {
    ops.forEach(op => op.disabled = false);
};

const disableOps = () => {
    ops.forEach(op => op.disabled = true)
};

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

//Operation Functions 

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

//When typing  a number 

const setNum = (e) => {
    
    if(viewer.textContent == "0" || complete == true){
        if(complete == true){
            clear();
        };
        
        theNum = e.target.getAttribute('data-value');
        complete = false;
        
    }else {
        theNum += e.target.getAttribute('data-value');
    } 

    viewer.textContent = theNum;
    console.log(theNum);
    enableOps();
    
};



//When pressing equal

const displayNumber = () => {
    
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    switch (operator){
        case 'addition':
        resultNum = addition(oldNum,theNum);
        break;

        case 'substraction':
        resultNum = substraction(oldNum,theNum);
        break;

        case 'multiplication':
        resultNum = multiplication(oldNum,theNum);
        break;

        case 'division':
        resultNum = division(oldNum,theNum);
        break;

        case 'sqrt':
        resultNum = sqrt(theNum);
        break;

        case 'pow':
        resultNum = pow(theNum);
        break;

        case 'factorial':
        resultNum = factorial(theNum);
        break;

        default:
        resultNum = theNum;
    };

    if (!isFinite(resultNum)){
        if (isNaN(resultNum)){
            resultNum = 'rip';
            complete = true;
            disableEqual();
            disableOps();
        } else {
            resultNum = 'rip';
            complete = true;
            disableEqual();
            disableOps();
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

//When pressing an operator 

const moveNum = (e) => {
    complete = false;
    oldNum = theNum;
    theNum = '';
    operator = e.target.getAttribute('data-op');
    console.log(operator);
    pendNum.textContent = `${oldNum} ${e.target.textContent}`;

    equal.setAttribute("data-result", "");
    viewer.textContent = '0';
    enableOps();
    enableDecimal();
    enableEqual();

};

const delChar = () => {
    if(!viewer.textContent){
        return
    }
    theNum = theNum.slice(0,-1);
    viewer.textContent = viewer.textContent.slice(0, -1);
};

const addToHistory = () => {
    if(resultNum == 'rip'){
        return;
    }
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
};




nums.forEach(num => num.addEventListener('click', setNum));
decimal.addEventListener('click', disableDecimal);
delButton.addEventListener('click', delChar)
ops.forEach(op => op.addEventListener('click', moveNum));
equal.addEventListener('click', displayNumber);
equal.addEventListener('click', addToHistory);
clearButton.addEventListener('click', clear);
clearButton.addEventListener('click', enableDecimal);






