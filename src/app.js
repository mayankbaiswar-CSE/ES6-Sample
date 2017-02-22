import generator from './generators';

let nums = [1,2,3];
let doubleNums = nums.map((e) => e * 2);

let test = `any string literal.`;
console.log(test);

for (let f of generator) {
    console.log(f);
}
