var firstnum, operand, secondnum, answer;
firstnum = prompt("Enter first number");
if (firstnum){
    operand = prompt("Enter operand (+, -, *, /, %)");
    if ((operand == "+") || (operand == "-") || (operand == "*") || (operand == "/") || (operand == "%")){
        secondnum = prompt("Enter second number");
        if (secondnum){
            switch(operand) {
                case "+":
                    answer = parseInt(firstnum) + parseInt(secondnum);
                    alert(`${firstnum} + ${secondnum} = ${answer}`);
                    break;
                case "-":
                    answer = parseInt(firstnum) - parseInt(secondnum);
                    alert(`${firstnum} - ${secondnum} = ${answer}`);
                    break;
                case "*":
                    answer = parseInt(firstnum) * parseInt(secondnum);
                    alert(`${firstnum} * ${secondnum} = ${answer}`);
                    break;
                case "/":
                    answer = parseInt(firstnum) / parseInt(secondnum);
                    alert(`${firstnum} / ${secondnum} = ${answer}`);
                    break;
                default:
                    answer = parseInt(firstnum) % parseInt(secondnum);
                    alert(`${firstnum} % ${secondnum} = ${answer}`);
                    break;
                // code block
            }

        }


    }
}
