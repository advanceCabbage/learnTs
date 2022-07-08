// 基础类型 null,undefined,symbol,boolean,void
const count: number = 123;
const teachername: string = "Dell";

// 对象类型
const teacher: {
  name: string;
  age: number;
} = {
  name: "dell",
  age: 18,
};

const numbers: number[] = [1, 2, 3];

class Person {}

const dell: Person = new Person();

const getTotal: () => number = () => {
  return 123;
};

//todo type annotation 类型注解, 我们来告诉TS变量是什么类型
//todo type inference 类型推断,TS 会自动的去尝试分析变量的类型
//! 如果TS 能够自动分析变量类型，我们就什么也不需要做了
//! 如果TS 无法分析变量类型的话，我们就需要使用类型注解
let count1: number;
count1 = 123;

let countInference = 123;

// 下面的情况TS能自动推断出类型，我们无需写类型注解
const firstNumber = 1;
const sencondNumber = 2;
const total = firstNumber + sencondNumber;

// 下面这种情况TS无法推断出类型，需要我们写类型注解
function getTotal1(firstNumber: number, sencondNumber: number) {
  return firstNumber + sencondNumber;
}

const total1 = getTotal1(firstNumber, sencondNumber);

const obj = {
  name: "dell",
  age: 18,
};

// 函数的入参需要写类型注解，返回值大多数情况可以通过函数推断出来，无需写类型注解

const func: (str: string) => number = (str) => {
  return parseInt(str, 10);
};

const fun1 = (str: string) => {
  return parseInt(str);
};

const date = new Date();

// 其他的case
interface Perspn {
  name: "string";
}
const rawData = '{"name":"dell"}';
const newData: Person = JSON.parse(rawData);

let temp: number | string = 123;
temp = "124";
