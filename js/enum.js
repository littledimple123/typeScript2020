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
console.log(a = ro);
