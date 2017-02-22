import generator from './generators';

let nums = [1,2,3];
let doubleNums = nums.map((e) => e * 2);

let test = `any string literal.`;
console.log(test);

// for (let f of generator) {
//     console.log(f);
// }

// console.log(...generator);

async function demo() {
    let da = await fun();
    return da;
    // console.log(da);
}

console.log(demo());

function fun() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`A new Way`), 1000);
    });
}