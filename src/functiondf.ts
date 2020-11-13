// 定义函数类型  1、有返回值，函数的返回值加上类型注解
function total(one: number, two: number): number {
  return one + two
}
const getTotal = total(1, 2)
console.log(getTotal)
// 2、函数没有返回值 类型注释是void
function sayHello(): void {
  console.log('sayHello')
}
// 3、执行不完的，比如死循环的，类型注释是 never
function nerverStop(): never {
  throw new Error();
  console.log("Hello World");
}
// 4、函数参数是对象时，怎么定义对象的属性
function add({ one, two }: { one: number, two: number }): number {
  return one + two
}
// 数组定义  1、数组中对象类型定义，采用`类型别名` type
const arr1: number[] = [1, 2, 3]
const arr2: string[] = ['1', '2', '3']
const arr3: (number|string)[] = [1,'2',3]
type Lady = { name: string, age: number }
const person: Lady[] = [
  { name: '张三', age: 18 },
  { name:'李四', age: 28}
]
console.log(arr1)
console.log(arr2)
console.log(arr3)
console.log(person)
// 2、可以用类定义
class Mada {
  'name': string
  'age': number
  'sex':string
}
const arr4: Mada[] = [
  {name:'张三',age:10,sex:'男'}
]
console.log(arr4)

// 接口
interface Gril {
  name: string
  age: number
  sex: string
}
const fillerPeople = (girl: Gril) => {
  girl.age>24 && girl.sex === '女' && console.log('yes')
}
let girl = {
  name: '张三',
  age: 25,
  sex:'女'
}
fillerPeople(girl)
// 接口和类型别名的区别
// 类型别名可以直接给类型，而接口必须代表对象
// type Girl1 = string
// const girl = {
//   name: '张三',
//   age: 25,
//   sex:'女'
// }
//类中的访问类型 public,private protect
//private 只能在类中访问，不能在子类和实例中访问
// protect 在类中访问，子类（继承）中访问，实例中不能访问