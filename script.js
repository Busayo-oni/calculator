let output = document.querySelector(".output");
var add = document.querySelector(".add");
var minus = document.querySelector(".minus");
var divide = document.querySelector(".divide");
var percentage = document.querySelector(".percentage");
var multiply = document.querySelector(".multiply");
var equal = document.querySelector(".equal");
let sum = 0;




var firstvalue = document.querySelector (".firstvalue");
var secondvalue = document.querySelector (".secondvalue");


document.querySelector('.add').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = value1 + value2;


};

document.querySelector('.minus').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = value1 - value2;
};

document.querySelector('.divide').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = value1 / value2;
};

document.querySelector('.percentage').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = value1 % value2;
};

document.querySelector('.multiply').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = value1 * value2;
}


// function getInputValues() {
//     const value1 = parseFloat(document.getElementById('inputValue1').value);
//     const value2 = parseFloat(document.getElementById('inputValue2').value);
//     return [value1, value2];
// }


document.querySelector('.equal').onclick = function() {
    // output.innerText = 45
    document.querySelector('.output').innerText = `${sum}`;


    document.querySelector('.firstvalue').value = '';
    document.querySelector('.secondvalue').value = '';

        // document.getElementById('result').textContent = 'Result: ' + result;
};


// Function to calculate square root
function calculateSquareRoot() {
    const [value1] = getInputValues();
    const result = Math.sqrt(value1);
    displayResult(result);
}

// Function to calculate exponential (e^x)
function calculateExponential() {
    const [value1] = getInputValues();
    const result = Math.exp(value1);
    displayResult(result);
}

// Function to calculate logarithm (log base 10)
function calculateLog() {
    const [value1] = getInputValues();
    const result = Math.log10(value1);
    displayResult(result);
}

// Function to calculate natural logarithm (ln)
function calculateLn() {
    const [value1] = getInputValues();
    const result = Math.log(value1);
    displayResult(result);
}

// Function to calculate sine
function calculateSin() {
    const [value1] = getInputValues();
    const result = Math.sin(value1);
    displayResult(result);
}

// Function to calculate cosine
function calculateCos() {
    const [value1] = getInputValues();
    const result = Math.cos(value1);
    displayResult(result);
}

// Function to calculate tangent
function calculateTan() {
    const [value1] = getInputValues();
    const result = Math.tan(value1);
    displayResult(result);
}

// Function to calculate arcsine
function calculateAsin() {
    const [value1] = getInputValues();
    const result = Math.asin(value1);
    displayResult(result);
}

// Function to calculate arccosine
function calculateAcos() {
    const [value1] = getInputValues();
    const result = Math.acos(value1);
    displayResult(result);
}

// Function to calculate arctangent
function calculateAtan() {
    const [value1] = getInputValues();
    const result = Math.atan(value1);
    displayResult(result);
}