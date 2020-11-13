//函数
function buildName(firstName, ...lastName) {
    console.log(firstName + '' + lastName);
}
let sqmEmployee = buildName('张三', '李四', '王五', '赵六');
let lettersRegexp = /^[A-Za-z]+$/;
let numberRegexp = /^[0-9]+$/;
class LettersOnlyValidator {
    isAcceptable(s) {
        return lettersRegexp.test(s);
    }
}
class ZipCodeValidator {
    isAcceptable(s) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
let strings = ["Hello", "98052", "101"];
let validators = {};
validators["zip code"] = new ZipCodeValidator();
validators["Letters only"] = new LettersOnlyValidator();
// for of 迭代对象的值，支持迭代数组，字符串，映射Maps，集合SetS
// for in 迭代对象的键
for (let s of strings) {
    for (let name in validators) {
        let isMatch = validators[name].isAcceptable(s);
        console.log(`'${s}' ${isMatch ? "matches" : "does not match"} ${name} `);
    }
}
// 函数返回值
function greet() {
    return "hello world";
}
function caller() {
    let msg = greet();
    console.log(msg);
}
caller();
// 递归函数
function factorial(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * factorial(number - 1));
    }
}
console.log(factorial(6));
//Map对象
let nameSiteMapping = new Map();
// 设置 Map 对象
nameSiteMapping.set("Google", 1);
nameSiteMapping.set("Runoob", 2);
nameSiteMapping.set("Taobao", 3);
console.log(nameSiteMapping);
// 获取键对应的值
console.log(nameSiteMapping.get("Runoob"));
// 判断 Map 中是否包含键对应的值
console.log(nameSiteMapping.has("Taobao"));
console.log(nameSiteMapping.has("Zhihu"));
// 返回 Map 对象键/值对的数量
console.log(nameSiteMapping.size);
// 删除 Runoob
// console.log(nameSiteMapping.delete("Runoob"));
// console.log(nameSiteMapping);
// 移除 Map 对象的所有键/值对
// nameSiteMapping.clear();
// console.log(nameSiteMapping);
//遍历Map keys
for (let i of nameSiteMapping.keys()) {
    console.log(i);
}
// 遍历value
for (let j of nameSiteMapping.values()) {
    console.log(j);
}
//遍历键值对
for (let z of nameSiteMapping.entries()) {
    console.log(z[0].keys);
    console.log(z[0], z[1]);
}
// 元祖，可以存放不同类型的数组
//联合类型
function disp(name) {
    if (name == 'string') {
        console.log(name);
    }
    else {
        for (let i = 0; i < name.length; i++) {
            console.log(name[i]);
        }
    }
}
disp('aaaa');
disp(['aaa', 'bbb', 'ccc']);
let options = {
    program: 'test1',
    commandline: 'runing'
};
console.log(options.commandline);
options = { program: 'test2', commandline: ['hello', 'world'] };
console.log(options.commandline[0]);
options = { program: 'test3', commandline: () => { return 'hello typescript'; } };
let fn = options.commandline;
console.log(fn());
class AgriLoan {
    constructor(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
}
let obj = new AgriLoan(10, 1);
console.log('利润为:' + obj.interest + ',抽成为：' + obj.rebate);
