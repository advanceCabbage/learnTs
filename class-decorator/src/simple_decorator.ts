// 类的装饰器
// 装饰器本身是一个函数
// 装饰器通过 @ 符号来使用
// 装饰器的执行时机，在创建类的时候就会立即执行，不是在实例化的时候执行
// 类装饰器接收的参数是构造函数

function testDecorator(constructor: any) {
  constructor.prototype.getName = () => {
    console.log("dell");
  };
  console.log("decprator");
}

function testDecorator1(flag: true) {
  if (flag) {
    return function (constructor: any) {
      console.log("decprator1");
    };
  } else {
    return function (constructor: any) {};
  }
}

@testDecorator
@testDecorator1(true)
class Test {}
const test = new Test();
// (test as any).getName();
