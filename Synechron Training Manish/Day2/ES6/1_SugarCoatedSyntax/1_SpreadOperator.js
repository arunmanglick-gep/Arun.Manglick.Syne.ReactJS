function log(message, ...args) {
    console.log(message);
    console.log(args);
}

var obj = [{
    a: "Synechron"
}, {
    b: "Pune"
}];

log("Call 1", obj);
log("Call 2", ...obj);