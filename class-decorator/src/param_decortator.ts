// class 里面属性的装饰器
// class 里面参数的装饰器
// 使用属性装饰器无法直接修改属性值，修改的值是在原型上的值，并不会影响到实例上的值
function nameDecorator(target: any, key: string): any {
  const descriptor: PropertyDescriptor = {
    writable: true,
  };
  return descriptor;
}

// 原型，方法名，参数所在的位置
function paramDecorator(target: any, method: string, paramIndex: number) {
  console.log(target, method, paramIndex);
}

class Test5 {
  @nameDecorator
  name = "dell";

  getInfo(@paramDecorator name1: string, age: number) {
    console.log(name1, age);
  }
}

const test5 = new Test5();
test5.name = "13";
test5.getInfo("de", 11);
console.log(test5.name);
