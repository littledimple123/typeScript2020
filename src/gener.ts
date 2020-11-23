// 泛型, 泛指的类型用`<>`进行定义
function join<T>(first: T, second: T) {
  return `${first}${second}`
}
console.log(join<number>(1, 2))
console.log(join<String>('aaa', 'bbb'))
// 泛型中数组的使用,第一种是直接使用[],第二种是使用Array<泛型>
// function myFun<ANY>(params: ANY[]) {
//   return params;
// }
// myFun < number > [1, 2]

// function myFun<ANY>(params: Array<ANY>) {
//   return params;
// }
// myFun <string> ["123", "456"]

//泛型中的继承
interface Girl {
  name:string
}
class SelectGirl<T extends Girl> {
  constructor(private girls: T[]) { }
  getGirl(index: number):string {
    return this.girls[index].name
  }
}
const selectGirl = new SelectGirl([
  { name: '大脚' },
  { name: '刘英' },
  { name: '张三' }
])
console.log(selectGirl.getGirl(1))