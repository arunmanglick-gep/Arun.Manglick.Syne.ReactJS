// function Person(a) {
//     this.age = a;
//     this.growOld = function () {
//         console.log(this);
//         this.age += 1;
//     }
// }

// function Person(a) {
//     this.age = a;
//     var self = this;
//     this.growOld = function () {
//         console.log(this);
//         self.age += 1;
//     }
// }

function Person(a) {
    this.age = a;
    this.growOld = () => {
        console.log(this);
        this.age += 1;
    }
}

var p1 = new Person(20);

// for (var i = 0; i < 10; i++) {
//     p1.growOld();
//     console.log(p1.age);
// }

setInterval(p1.growOld, 1000);
// setInterval(p1.growOld.bind(p1), 1000);
setInterval(function () {
    console.log(p1.age);
}, 1000);