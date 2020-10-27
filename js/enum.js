var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 枚举
var Color;
(function (Color) {
    Color[Color["red"] = 2] = "red";
    Color[Color["green"] = 3] = "green";
    Color[Color["blue"] = 4] = "blue";
})(Color || (Color = {}));
console.log(Color.green);
//接口
function printLabel(labelobj) {
    console.log(labelobj.label);
}
var myobj = { num: 1, label: 'this is a string' };
printLabel(myobj);
function printLabelInterface(labelobj) {
    console.log(labelobj.label);
}
var myobjs = {
    num: 1,
    label: 'that girl is idiot'
};
printLabelInterface(myobjs);
function creatSquare(obj) {
    var configObj = { color: 'red', area: 100 };
    if (obj.color) {
        configObj.color = obj.color;
    }
    if (obj.width) {
        configObj.area = obj.width * obj.width;
    }
    return configObj;
}
var myarea = creatSquare({ color: 'green' });
console.log(myarea);
//只读
var a = [1, 2, 3];
var ro = a;
// ro[1] = 5  //报错，因为ro是只读的
console.log(a = ro);
// 类
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    ;
    Greeter.prototype.great = function () {
        return 'hello ' + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
console.log(greeter.great());
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (kms) {
        if (kms === void 0) { kms = 0; }
        console.log("animal move " + kms + "m.");
    };
    return Animal;
}());
var Dogs = /** @class */ (function (_super) {
    __extends(Dogs, _super);
    function Dogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dogs.prototype.dark = function () {
        console.log('darking');
    };
    return Dogs;
}(Animal));
var dog = new Dogs();
dog.move(100);
dog.dark();
//类可以重写父类的方法
var Animals = /** @class */ (function () {
    function Animals(theName) {
        this.name = theName;
    }
    Animals.prototype.move = function (kms) {
        if (kms === void 0) { kms = 10; }
        console.log(this.name + " move " + kms + "m.");
    };
    return Animals;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (kms) {
        if (kms === void 0) { kms = 5; }
        console.log('snake moving');
        _super.prototype.move.call(this, kms);
    };
    return Snake;
}(Animals));
var snakechildren = new Snake('snake');
snakechildren.move();
snakechildren.move(15);
