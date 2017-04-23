function calculatorService() {
    var add = function (x, y) {
        console.log(x + y);
    }

    var subtract = function (x, y) {
        console.log(x - y);
    }

    var multiply = function (x, y) {
        console.log(x * y);
    }

    var divide = function (x, y) {
        console.log(x / y);
    }

    return {
        add,
        subtract,
        multiply,
        divide
    };
}

// var c = calculatorService();
// console.log(c);

// var add = calculatorService().add;
// console.log(add);
// add(23,45);

// var subtract = calculatorService().subtract;
// console.log(subtract);
// subtract(23,45);

//Destructuring
// var {add} = calculatorService();
// console.log(add);
// add(23,45);

// var {add,subtract} = calculatorService();

// console.log(add);
// add(23,45);

// console.log(subtract);
// subtract(23,45);

var arr = [1, 2, 3, 4, 5, 6];
// var x = arr[0];
// var y = arr[1];

// var [x,y] = arr;
// console.log(x + "----" + y);

// var x = arr[1];
var [,,x] = arr;
console.log(x);