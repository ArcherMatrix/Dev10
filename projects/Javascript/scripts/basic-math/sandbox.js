let x = 10;
let y = 5;
let z = 6;

let val = x + y + z;
let val2;
console.log(`${x} + ${y} + ${z} is ${val}`);

val = x - y - z;
console.log(`${x} - ${y} - ${z} is ${val}`);

val = x * y * z;
console.log(`${x} * ${y} * ${z} is ${val}`);

val = x / y / z;
console.log(`${x} / ${y} / ${z} is ${val}`);

y = 3;
val = x % y;
val2 = x % z;
console.log(`${x} % ${y} is ${val}`);
console.log(`${x} % ${z} is ${val2}`);

y=5;
console.log(x *(y - z) );