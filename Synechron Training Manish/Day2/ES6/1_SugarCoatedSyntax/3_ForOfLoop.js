// function log(message, ...args) {
//     console.log(message);
//     for (var i = 0; i < args.length; i++) {
//         console.log(args[i]);
//     }
// }

// function log(message, ...args) {
//     console.log(message);
//     for (var i in args) {
//         console.log(i + "----" + args[i]);
//     }
// }

function log(message, ...args) {
    console.log(message);
    for (var i of args) {
        console.log(i);
    }
}

log("Call 1", "Hello", "How", 10, 20);