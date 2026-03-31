/*Jaron Sauerwein 3-31-2026*/

const choice = prompt(`Enter your choice:\n1. Add two numbers\n2. Subtract two numbers\n3. Multiply two numbers\n4. Divide two numbers\n5. Exit`);
const num1 = prompt(`Enter your first number`);
const num2 = prompt(`Enter your second number`);

let convertChoice = parseInt(choice);

let num3 = parseFloat(num1);
let num4 = parseFloat(num2);

switch(choice){
    case "1":
        let additionSol = num3 + num4;
        alert(`The solution is ${additionSol}.`);
        break;
    case "2":
        let subtractionSol = num3 - num4;
        alert(`The solution is ${subtractionSol}.`);
        break;
    case "3":
        let multiplicationSol = num3 * num4;
        alert(`The solution is ${multiplicationSol}.`);
        break;
    case "4":
        let divisionSol = num3 / num4;
        alert(`The solution is ${divisionSol}.`);
        break;
    default:
        alert(`Exiting the program.`);
}