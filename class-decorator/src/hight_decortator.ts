function testDecorator2() {
  return function <T extends new (...args: any[]) => any>(constructor: T) {
    return class extends constructor {
      name = "lee";
      getName() {
        console.log(this.name);
      }
    };
  };
}

const Test2 = testDecorator2()(
  class {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
);

const test2 = new Test2("dell");
console.log(test2);
test2.getName();
