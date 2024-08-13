var output = document.querySelector(".output");
var add = document.querySelector(".add");
var minus = document.querySelector(".minus");
var divide = document.querySelector(".divide");
var percentage = document.querySelector(".percentage");
var multiply = document.querySelector(".multiply");
var equal = document.querySelector(".equal");
var square = document.querySelector('.square');
var Expo = document.querySelector('.Expo');
var log = document.querySelector('.log');
var ln = document.querySelector('.ln');
var sin = document.querySelector('.sin');
var cos = document.querySelector('.cos');
var tan = document.querySelector('.tan');
var asin = document.querySelector('.asin');
var acos = document.querySelector('.acos');
var atan = document.querySelector('.atan');
var sum = 0;




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

document.querySelector('.square').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = Math.sqrt(value1);
}

document.querySelector('.Expo').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = Math.exp(value1);
}

document.querySelector('.log').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = Math.log10(value1);
}

document.querySelector('.ln').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = Math.log(value1);
}

document.querySelector('.sin').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = Math.sin(value1);
}

document.querySelector('.cos').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = Math.cos(value1);
}


document.querySelector('.tan').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = Math.tan(value1);
}


document.querySelector('.asin').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = Math.asin(value1);
}


document.querySelector('.acos').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = Math.acos(value1);
}


document.querySelector('.atan').onclick = function() {
    let value1 = parseFloat(document.querySelector('.firstvalue').value);
    let value2 = parseFloat(document.querySelector('.secondvalue').value);
    sum = Math.atan(value1);
}




document.querySelector('.equal').onclick = function() {
    document.querySelector('.output').innerText = `${sum}`;


    document.querySelector('.firstvalue').value = '';
    document.querySelector('.secondvalue').value = '';

        // document.getElementById('sum').textContent = 'sum: ' + result;
};
