import { readFileSync } from 'fs';
const input = readFileSync('day7.txt', 'utf8')
const lines = input.split(/\r?\n/)
const numbers = lines[0].split(',').map(Number);

let min = Math.min(...numbers);
let max = Math.max(...numbers);
console.log('min: ' + min + ' max: ' + max);

let array = [...Array(max - min + 1).keys()].map(i => i + min);
let sums = [];
array.forEach(target => {
    let sum = 0;
    numbers.forEach(num => {
        sum += Math.abs(num - target);
    });
    sums.push(sum);
});
let minSum = Math.min(...sums);
console.log('minSum: ' + minSum + ' index:' + sums.indexOf(minSum));