// // function example
// function display(some) {
//     document.getElementById('output').innerHTML = 'Total ' + some;
//     console.log(some);
// }

// function calculator(num1,num2) {
//     const calc = num1 + num2;
//     display(calc);
// }

// calculator(4,7);


// js callback example

function displayMain(some2){
    document.getElementById('outputCallback').innerHTML = 'Total ' + some2;
    console.log(some2);
}

function calculateMain(par1, par2, callback){
    const sumAdd = par1 + par2;
    if(callback) callback(sumAdd);
    return sumAdd;
}

const result = calculateMain(5,6, displayMain);
console.log(result);
