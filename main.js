let viewer = document.querySelector('.displayNum'); 
let equal = document.querySelector('.equal'); 
let nums = Array.from(document.querySelectorAll('.number')) 
let ops = Array.from(document.querySelectorAll('.operation')) 
let pendNum = document.querySelector('.prev');
let clearButton = document.querySelector('.del');
let delButton = document.querySelector('.delete');

let theNum = "0"; 
let oldNum = ""; 
let resultNum; 
let operator; 

let addition = (x,y) => x+y;

let substraction = (x,y) => x-y;

multiplication = (x,y) => x*y;

division = (x,y) => x/y;

sqrt = (x) => Math.sqrt(x);

pow = (x,y) => Math.pow(x,y);

let factorial = (x) => {
    let total = 1;
    for(i = x; i > 0; i--){
        total *= i;
    };
    return total;
};


let setNum = (e) => {

    if(viewer.textContent == "0"){
        theNum = e.target.getAttribute('data-value');
    } else {
        theNum += e.target.getAttribute('data-value');
    }

    viewer.textContent = theNum;
    console.log(theNum);
    
};

let moveNum = (e) => {
    oldNum = theNum;
    theNum = '';
    operator = e.target.getAttribute('data-op');
    console.log(operator);
    pendNum.textContent = `${oldNum} ${e.target.textContent}`;

    equal.setAttribute("data-result", "");
    viewer.textContent = '0';

}

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
    }

    if (!isFinite(resultNum)){
        if (isNaN(resultNum)){
            resultNum = 'rip';
        } else {
            resultNum = 'rip';

        }
    }
    console.log(resultNum);
    pendNum.textContent += ` ${theNum}`;
    viewer.innerHTML = resultNum;
    equal.setAttribute('data-result', resultNum);
    oldNum = 0;
    theNum = resultNum;
}

let clear = () => {
    oldNum = "";
    theNum = "";
    viewer.textContent = "0";
    pendNum.textContent = "";
    equal.setAttribute('data-result', resultNum);
};


let delChar = () => {
    if(!viewer.textContent){
        return
    }
    theNum = theNum.slice(0,-1);
    viewer.textContent = viewer.textContent.slice(0, -1);
}





nums.forEach(num => num.addEventListener('click', setNum));
delButton.addEventListener('click', delChar)
ops.forEach(op => op.addEventListener('click', moveNum));
equal.addEventListener('click', displayNumber);
clearButton.addEventListener('click', clear);






