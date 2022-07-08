// interface 和 type 相类似，但并不完全一致
interface Person {
  // readonly name: string;
  name: string;
  age?: number;
  [propName: string]: any; // 可以传递其余的任何参数
  say(): string; // 需要一个say方法且返回一个string
}

interface Teacher extends Person {
  teach(): string;
}

interface sayHi {
  (word: string): string; // 定义一个函数的类型声明
}

const getPersonName = (person: Teacher) => {
  console.log(person.name);
};

const setPersonName = (person: Teacher, name: string): void => {
  person.name = name;
};
const person = {
  name: "dell",
  sex: "male",
  say() {
    return "say hello";
  },
  teach() {
    return "teach";
  },
};

// 通过字面量直接传递参数，TS会进行类型的强校验
// eg: 下面这样直接传递会报错
// getPersonName({
//   name: "dell",
//   sex: "male",
// });
getPersonName(person);
setPersonName(person, "lee");

class User implements Person {
  name = "dell";
  say() {
    return "hello";
  }
}

const say: sayHi = (word: string) => {
  return word;
};
