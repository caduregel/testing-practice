export const calculate = (num1, num2, operation) => {
    switch (operation) {
        case "add":
            return num1 + num2
            break;
        case "subtract":
            return num1 - num2
            break;
        case "divide":
            return num1 / num2
            break;
        case "multiply":
            return num1 * num2
            break;
        default:
            return "Please enter a number"
            break;
    }


}