let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentInput === '' && op === '-') {
        currentInput = '-';
        updateDisplay();
        return;
    }
    if (currentInput === '') return;
    if (operator !== '') calculate();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
}

function updateDisplay() {
    display.innerText = currentInput || previousInput || '0';
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay();
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = '';
    previousInput = '';
    updateDisplay();
}
