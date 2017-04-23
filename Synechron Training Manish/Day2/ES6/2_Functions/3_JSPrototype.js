// function Person(n) {
//     this.name = n;

//     this.setName = function (nm) {
//         this.name = nm;
//     };

//     this.getName = function () {
//         return this.name;
//     };
// }

// function Person(n) {
//     this.name = n;
// }

// Person.prototype.setName = function (nm) {
//     this.name = nm;
// };

// Person.prototype.getName = function () {
//     return this.name;
// };

var Person = (function () {
    function Person(n) {
        this.name = n;
    }

    Person.prototype.setName = function (nm) {
        this.name = nm;
    };

    Person.prototype.getName = function () {
        return this.name;
    };

    return Person;
})();

var p1 = new Person("Manish");
console.log(p1.getName());
p1.setName("Abhijeet");
console.log(p1.getName());

var p2 = new Person("RK");
console.log(p2.getName());
p2.setName("Pravin");
console.log(p2.getName());