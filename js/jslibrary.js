function add(a, b, ansID) {
    document.getElementById(ansID).innerHTML = (a + b);
}

function sub(a, b, ansID) {
    document.getElementById(ansID).innerHTML = (a - b);
}

function mul(a, b, ansID) {
    document.getElementById(ansID).innerHTML = (a * b);
}

function div(a, b, ansID) {
    document.getElementById(ansID).innerHTML = (a / b);
}

function pow(a, b, ansID) {
    document.getElementById(ansID).innerHTML = (a ** b);
}