const calculator = {
	displayValue = '0';
	firstOperand = null;
	operator = null;
	waitingForSecondOperand = false;
};

function inputDigit(digit){
	const { displayValue, waitingForSecondOperand } = calculator;

	if (waitingForSecondOperand === true) {
		calculator.displayValue = digit;
		calculator.waitingForSecondOperand = false;
	} else {
		calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
	}
};

function inputDecimal(dot) {
	if (waitingForSecondOperand === true) {
		calculator.displayValue = "0.";
		calculator.waitingForSecondOperand = false;
		return;
	};
	if (!calculator.displayValue.includes(dot)) {
		calculator.displayValue += dot;
	}
};

function updateDisplay() {
	const display = document.querySelector('.calculator-screen');
	display.value = calculator.displayValue;
};

const keys = document.querySelector('.calculator-keys')
keys.addEventListener ('click'(function(event) {
	const { target } = event;
	const { value } = target;
	if (!target.matches(button)) {
		switch (value) {
			case '+':
			case '-':
			case '*':
			case '/':
			handleOperator();
			break;

			case '.':
			inputDecimal();
			break;

			case 'all-clear':
			resetCalculator();
			break;

			default:
			if (Number.isInteger(parseFloat(value))){
				inputDigit();
			};

		};
		updateDisplay();
	};

	function resetCalculator() {
		calculator.displayValue = '0';
		calculator.firstOperand = null;
		calculator.operator = null;
		waitingForSecondOperand = false;
	};