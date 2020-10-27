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
