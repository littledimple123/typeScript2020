// 定义函数类型  1、有返回值，函数的返回值加上类型注解
function total(one, two) {
    return one + two;
}
const getTotal = total(1, 2);
console.log(getTotal);
// 2、函数没有返回值 类型注释是void
function sayHello() {
    console.log('sayHello');
}
// 3、执行不完的，比如死循环的，类型注释是 never
function nerverStop() {
    throw new Error();
    console.log("Hello World");
}
// 4、函数参数是对象时，怎么定义对象的属性
function add({ one, two }) {
    return one + two;
}
// 数组定义  1、数组中对象类型定义，采用`类型别名` type
const arr1 = [1, 2, 3];
const arr2 = ['1', '2', '3'];
const arr3 = [1, '2', 3];
const person = [
    { name: '张三', age: 18 },
    { name: '李四', age: 28 }
];
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(person);
// 2、可以用类定义
class Mada {
}
const arr4 = [
    { name: '张三', age: 10, sex: '男' }
];
console.log(arr4);
const fillerPeople = (girl) => {
    girl.age > 24 && girl.sex === '女' && console.log('yes');
};
let girl = {
    name: '张三',
    age: 25,
    sex: '女'
};
fillerPeople(girl);
let www = {
    aaa: true,
    say: () => {
        return 'www';
    }
};
let ttt = {
    aaa: false,
    skill: () => {
        return 'ttt';
    }
};
function juderWho(animal) {
    if (animal.aaa) {
        animal.say();
    }
    else {
        animal.skill();
    }
}
// 枚举
var Status;
(function (Status) {
    Status[Status["MASSAGE"] = 0] = "MASSAGE";
    Status[Status["SPA"] = 1] = "SPA";
    Status[Status["DABAOJIAN"] = 2] = "DABAOJIAN";
})(Status || (Status = {}));
function getServe(status) {
    if (status === Status.MASSAGE) {
        return "massage";
    }
    else if (status === Status.SPA) {
        return "spa";
    }
    else if (status === Status.DABAOJIAN) {
        return "dabaojian";
    }
}
const result = getServe(Status.SPA);
console.log(result);
