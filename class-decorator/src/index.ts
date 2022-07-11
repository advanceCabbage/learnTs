const userInfo: any = undefined;

function catchError(msg: string) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const fn = descriptor.value;
    descriptor.value = function () {
      try {
        fn();
      } catch (error) {
        console.log(msg);
      }
    };
  };
}

class Test6 {
  @catchError("userInfo.name 不存在")
  getName() {
    return userInfo.name;
  }

  @catchError("userInfo.age 不存在")
  getAge() {
    return userInfo.age;
  }
}

const test6 = new Test6();
test6.getName();
