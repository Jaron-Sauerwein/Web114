/*Jaron Sauerwein April 8th, 2026*/

let entryCount = 0;
let userName = prompt(`What is your name?`);

function calcGasAvg(){
    let runningTotal = 0;
    let total = 0;
    total = parseFloat(prompt(`Enter your weekly gas total. Enter -1 when you are finished.`));

    while (total !== -1){
        runningTotal = total + runningTotal;
        entryCount = entryCount + 1;
        total = parseFloat(prompt(`Enter your weekly gas total. Enter -1 when you are finished.`));
    } 

    let averageGas = runningTotal/entryCount;

    if(entryCount > 0){
        return averageGas;
    }

    else{
        return 0;
    }

}


let gas = calcGasAvg();
confirm(`${userName}'s average gas spending per week is $${gas.toFixed(2)}`);

if(entryCount === 0){
    confirm(`No gas totals were entered.`);
}
else if(entryCount === 1){
    confirm(`You entered ${entryCount} gas total.`);
}

else{
    confirm(`You entered ${entryCount} gas totals.`);
}
