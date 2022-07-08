function add(first: number, second: number): number {
  return first + second;
}

const total2 = add(1, 2);
function sayHello(): void {
  console.log("hello");
}

// never 表示该函数无法执行完所有内容
function errorEmitter(): never {
  throw new Error();
  console.log(123);
}

function add1({ first, second }: { first: number; second: number }): number {
  return first + second;
}

const toal = add1({ first: 1, second: 2 });
