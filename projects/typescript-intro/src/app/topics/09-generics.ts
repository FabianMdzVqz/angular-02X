export function whatsMyType<T>(argument: T): T {
  return argument;
}

let amIaString = whatsMyType<string>('Hello world!');
console.log(amIaString.split(' '))


let amINumber = whatsMyType<number>(1);
console.log(amIaString)


let amIArray = whatsMyType<number[]>([1,2,3,45,]);
console.log(amIArray.length)


