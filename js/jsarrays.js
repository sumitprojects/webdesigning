var fruits = [];


const arrayCreators = {
    addElement: function(data) {
        fruits.push(data);
    },
    deleteElement: function(num) {
        if (num > fruits.length || num <= 0) {
            return null;
        } else {
            fruits.splice((num - 1), 1);
        }
    },
    getElement: function(num) {
        if (num > fruits.length || num <= 0) {
            return "No Element Found";
        } else {
            return fruits[num - 1];
        }
    }

};


var addData = function(id, ansId) {
    var data = document.getElementById(id).value;
    var ans = document.getElementById(ansId);
    if (data !== undefined && data !== "") {
        arrayCreators.addElement(data);
        ans.innerHTML = fruits;
    }
};


var removeData = function(id, ansId) {
    var data = parseInt(document.getElementById(id).value);
    var ans = document.getElementById(ansId);
    if (data !== undefined && data !== "") {
        arrayCreators.deleteElement(data);
        ans.innerHTML = fruits;
    }
};


var getData = function(id, ansId) {
    var data = parseInt(document.getElementById(id).value);
    var ans = document.getElementById(ansId);
    if (data !== undefined && data !== "") {
        ans.innerHTML = arrayCreators.getElement(data);;
    }
};
// document.getElementById("demo").innerHTML = fruits.toString();


// document.getElementById("demo").innerHTML = fruits.join(" * ");

// fruits.pop(); //last element removal

// document.getElementById("demo1").innerHTML = fruits.toString();

// fruits.push("Kiwi"); //  Adds a new element ("Kiwi") to fruits


// fruits.shift(); // Removes the first element "Banana" from fruits


// fruits.unshift("Lemon"); // Adds a new element "Lemon" to fruits


// fruits[fruits.length] = "Kiwi"; // Appends "Kiwi" to fruits


// fruits.splice(2, 0, "Lemon", "Kiwi");


// var myGirls = ["Cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias", "Linus"];
// var myChildren = myGirls.concat(myBoys); // Concatenates (joins) myGirls and myBoys


// var citrus = fruits.slice(1, 5);