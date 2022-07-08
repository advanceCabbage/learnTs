const arr: (number | string)[] = [1, "2", 3];
const stringArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined];

//todo type alias 类型别名
type User = { name: string; age: number };

class Teacher {
  name: string;
  age: number;
}

const objectArr: User[] = [
  {
    name: "dell",
    age: 28,
  },
];

const objectArr2: Teacher[] = [
  new Teacher(),
  {
    name: "dell",
    age: 28,
  },
];

//! 元组 tuple
const teacherInfo: [string, string, number] = ["Dell", "male", 18];

const teacherList: [string, string, number][] = [
  ["dell", "male", 10],
  ["dell", "male", 10],
];
