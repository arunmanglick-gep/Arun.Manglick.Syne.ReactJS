// function log(message)
// {
//     console.log(message);
//     console.log(arguments);
// }

// log("Hello");
// log("Hello","Reply");
// log("Hello","Reply","Where Are you?");

function log(message, what, ...args) {
    console.log(message);
    console.log(args);
}

log("Hello");
log("Hello", "Reply");
log("Hello", "Reply", "Where Are you?");