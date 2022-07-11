// 类里面的方法访问器 增加装饰器

function visitDecorator(
  target: any,
  key: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = false;
}

class Test4 {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  @visitDecorator
  set name(name: string) {
    this._name = name;
  }
}

const test4 = new Test4("dell");
test4.name = "122";
console.log(test4.name);
