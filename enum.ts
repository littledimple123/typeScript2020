// 枚举
enum Color { red = 2, green, blue }
console.log(Color.green)
//接口
function printLabel(labelobj: { label: string }) {
  console.log(labelobj.label)
}
let myobj = { num: 1, label: 'this is a string'}
printLabel(myobj)

interface objVal {
  label: string
}
function printLabelInterface(labelobj: objVal) {
  console.log(labelobj.label)
}
let myobjs = {
  num: 1,
  label: 'that girl is idiot'
}
printLabelInterface(myobjs)

// 可选属性
interface SquareArea {
  color?: string;
  width?: number;
}
function creatSquare(obj: SquareArea): { color: string;area:number }{
  let configObj = { color: 'red', area: 100 }
  if (obj.color) {
    configObj.color = obj.color
  }
  if (obj.width) {
    configObj.area = obj.width * obj.width
  }
  return configObj
}
let myarea = creatSquare({ color: 'green' });
console.log(myarea)

//只读
let a: number[] = [1, 2, 3]
let ro: ReadonlyArray<number> = a
// ro[1] = 5  //报错，因为ro是只读的
console.log(a = ro as number[])
// 类
class Greeter {
  greeting: string;
  constructor(message:string) {
    this.greeting = message
  };
  great() {
    return 'hello ' + this.greeting
  }
}
let greeter = new Greeter('world')
console.log(greeter.great())

class Animal {
  move(kms: number = 0) {
    console.log(`animal move ${kms}m.` )
  }
}
class Dogs extends Animal {
  dark() {
    console.log('darking')
  }
}
const dog = new Dogs()
dog.move(100)
dog.dark()

//派生类可以重写父类的方法
class Animals {
  name: string;
  constructor(theName: string) {
    this.name = theName
  }
  move(kms: number = 10) {
    console.log(`${this.name} move ${kms}m.`)
  }
}
class Snake extends Animals {
  constructor(name: string) {
    super(name)
  }
  move(kms: number = 5) {
    console.log('snake moving')
    super.move(kms)
  }
}
let snakechildren = new Snake('snake')
snakechildren.move()
snakechildren.move(15)

// private 当成员被标记成 private时，它就不能在声明它的类的外部访问
class Zoo {
  private name: string;
  constructor(thname: string) { this.name = thname }
}
class Rhino extends Zoo {
  constructor() { super('Rhino')}
}
class Employee {
  private name: string;
  constructor(thname: string) {this.name=thname}
}
let tiger = new Zoo('tiger')
// console.log(tiger.name)  // 报错，因为Zoo中name 私有，所有不能在声明它的类之外使用
let rhino = new Rhino()
// console.log(rhino.name) // 报错，原因同上
let employee = new Employee('Bob')
// tiger = employee // 报错，二者的类型不一样

// protected 当成员被标记为 protected，派生类中仍可以使用
class People {
  protected name: string;
  constructor(thName: string) {
    this.name = thName
  }
}
class Employees extends People {
  private department: string;
  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  public getElevatorPitch() {
    console.log(`${this.name} works in ${this.department}`)
  }
}
let liming = new Employees('liming', 'sale')
console.log(liming.getElevatorPitch())
// console.log(liming.name) // 报错，因为name是People的protected字段，能在派生类中使用，不能在liming中使用

//构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
class Work {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Workers extends Work {
  private department: string;
  constructor(name: string, department: string) {
      super(name);
      this.department = department;
  }
  public getElevatorPitch() {
      return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
let hanmei = new Workers('hanmei', 'hr')
console.log(hanmei.getElevatorPitch())
// let recycleWork = new work('recycleWork') // 构造函数被protected,不能实例化

//存取器
// let passcode = "secret passcode";
// class House {
//   private homeCode: string;
//   get fullname(): string {
//     return this.homeCode
//   }
//   set fullname(newcode: string) {
//     if (passcode && passcode == "secret passcode") {
//       this.homeCode = newcode;
//     }
//     else {
//       console.log("Error: Unauthorized update of employee!");
//     }
//   }
// }
// let house = new House()
// house.homecode = '1234'

// 静态属性  静态属性是在类上，而不是类的实例上，所以访问静态属性时，用类名.静态属性。下面的例子上Grid.origin
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor (public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

// 抽象类  抽象类作为派生类的基类，一般不会实例化。抽象类中的抽象方法不包含具体实现但是必须在派生类中实现。
abstract class Department {
  constructor(public _name: string) { }
  printName(): void {
    console.log('department name is' + this._name)
  }
  abstract greetDepartment(): void
}
class AccountingDepartment extends Department {
  constructor() {
    super('Accounting')
  }
  greetDepartment():void {
    console.log('The Accounting Department meets each Monday at 10am.');
  }
  generateReports(): void {
    console.log('Generating accounting reports...');
  }
}
let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department() // 不能创建一个抽象类的实例
department = new AccountingDepartment()
department.printName()
department.greetDepartment()
// department.generateReports() //方法在声明的抽象类中不存在
