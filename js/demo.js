// console.log('External');
function floatConvert(idData) {
    return parseFloat(document.getElementById(idData).innerHTML);
}

function intConvert(idData) {
    return parseInt(document.getElementById(idData).innerHTML);
}
// Function Creation
function add(a, b) {
    if (a < 0 || b < 0) {
        return "Not a Number";
    } else {
        return a + b;
    }
}


// Function Creation
function sub(a, b) {
    if (a < 0 || b < 0) {
        return "Not a Number";
    } else {
        return a - b;
    }
}


// Function Creation
function mul(a, b) {
    if (a < 0 || b < 0) {
        return "Not a Number";
    } else {
        return a * b;
    }
}

// Function Creation
function div(a, b) {
    if (a < 0 || b <= 0) {
        return "Not a Number";
    } else {
        return a / b;
    }
}

// Function Creation
function mod(a, b) {
    if (a < 0 || b <= 0) {
        return "Not a Number";
    } else {
        return a % b;
    }
}


// Function Creation
function gt(a, b) {
    return (a > b);
}


// Function Creation
function lt(a, b) {
    return (a < b);
}


// Function Creation
function gte(a, b) {
    return (a >= b);
}


// Function Creation
function lte(a, b) {
    return (a <= b);
}

// Function Creation
function equ(a, b) {
    return (a == b);
}

// Function Creation
function neq(a, b) {
    return (a != b);
}