// 普通方法 target 对应的是类的 prototype
// 静态方法 target 对应的是类的方法函数
function getNameDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = true;
  descriptor.value = function () {
    return "dell descriptor";
  };
}

class Test3 {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  @getNameDecorator
  getName() {
    return this.name;
  }
}

const test3 = new Test3("dell");
test3.getName = () => {
  return "123";
};
console.log(test3.getName());
