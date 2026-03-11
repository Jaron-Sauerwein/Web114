/*Jaron Sauerwein*/

"use strict"

let hourlyWage = prompt("What is your hourly wage?").trim();
hourlyWage = Number(hourlyWage);
let confirmHourlyWage = confirm(`You entered $${hourlyWage} per hour. Is that correct?`);
let hoursWorked = prompt("How many hours have you worked?").trim();
hoursWorked = Number(hoursWorked);
let confirmHoursWorked = confirm(`You said that you worked ${hoursWorked} hours this week. Is that correct?`)

let grossPay = hourlyWage * hoursWorked;
let taxes = grossPay * 0.10;
let netPay = grossPay - taxes;

alert(`Your net pay is: $${netPay.toFixed(2)}!`);

if (hoursWorked > 40){
    alert(`You worked overtime this week!`);
}
else if (hoursWorked === 40){
    alert(`You worked exactly 40 hours.`);
}
else{
    alert(`No overtime this week.`);
}

if (netPay > 800){
    alert(`Great paycheck this week!`);
}
else{
    alert(`Keep working toward a bigger paycheck!`);
}










