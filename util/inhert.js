var util = require('util');
function Base() {
    this.name = 'Jian',
    this.year = 2016,
    this.sayHello = function () {
        console.log('Hello ' + this.name + ', today is ' + this.year + ' year');
    }
}
Base.prototype.showName = function () {
    console.log(this.name);
}

function Sub() {
    this.name = 'sub';
}

util.inherits(Sub, Base);
var newBase = new Base();
newBase.showName();
newBase.sayHello();
console.log(newBase);

var newSub = new Sub();
newSub.showName();
console.log(newSub);
// 继承原型中的内容
// newSub.sayHello();   error
