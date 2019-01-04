let addition = (x,y) => x+y;

let substraction = (x,y) => x-y;

let multiplication = (x,y) => x*y;

let division = (x,y) => x/y;

let sqrt = (x) => Math.sqrt(x);

let pow = (x,y) => Math.pow(x,y);

let factorial = (x) => {
    let total = 1;
    for(i = x; i > 0; i--){
        total *= i;
    };
    return total;
};