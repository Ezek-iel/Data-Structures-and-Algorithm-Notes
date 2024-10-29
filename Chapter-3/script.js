// @ts-check

/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {number}
 */
function recursiveMultiplication(firstNumber, secondNumber){
    if (secondNumber == 1){
        return firstNumber
    } else{
        return firstNumber + recursiveMultiplication(firstNumber, secondNumber - 1)
    }
}   

/**
 * Find the factorial of a particular number
 * @param {number} digit 
 * @returns {number}
 */
function recursiveFactorial(digit){
    if (digit == 1){
        return digit
    } else {
        return digit * recursiveFactorial(digit - 1)
    }
}

/**
 * Performs a recursive countdown of a function
 * @param {number} number 
 * @returns {void}
 */
function recursiveCountdown(number){
    if (number < 0){
        return
    } else {
        console.log(number)
        recursiveCountdown(number - 1)
    }
}
