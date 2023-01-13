//  Секретний вагон

// const yourPlace = +prompt(`Введіть номер свого місця (від 1 до 54).`);
// let compartmentNumber = Math.floor((yourPlace - 1) / 4 + 1);
// let upDown = "верхнє";
// let sideUnside = "не бокове";

// if (yourPlace % 2) {
//     upDown = "нижнє";
// }

// if (yourPlace > 36) {
//     compartmentNumber = Math.floor((54 - yourPlace) / 2 + 1);
//     sideUnside = "бокове";
// }

// const answer = `У вас ${upDown} ${sideUnside} місце у купе №${compartmentNumber}.`;


let push;

function func() {

    let result;

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (push) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    document.getElementById("result").innerHTML = result;
}


// function calc(x, y, operator) {
//     if (operator === "+") return x + y;
//     if (operator === "-") return x - y;
//     if (operator === "*") return x * y;
//     if (operator === "/") return x / y;
//   }
//   console.log(calc(2, 3, "*"));