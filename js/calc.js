const calc = {
    name: "Calculator APP JS",
    add: function(a, b, ansID) {
        document.getElementById(ansID).innerHTML = (a + b);
    },
    sub: function(a, b, ansID) {
        document.getElementById(ansID).innerHTML = (a - b);
    },
    operation: function(op, a, b, id) {
        if (typeof op == "function" && typeof op != "undefined") {
            op(a, b, id);
        } else {
            console.log("Error Function not found");
        }
    }
};