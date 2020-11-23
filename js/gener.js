// 泛型, 泛指的类型用`<>`进行定义
function join(first, second) {
    return `${first}${second}`;
}
console.log(join(1, 2));
console.log(join('aaa', 'bbb'));
class SelectGirl {
    constructor(girls) {
        this.girls = girls;
    }
    getGirl(index) {
        return this.girls[index].name;
    }
}
const selectGirl = new SelectGirl([
    { name: '大脚' },
    { name: '刘英' },
    { name: '张三' }
]);
console.log(selectGirl.getGirl(1));
