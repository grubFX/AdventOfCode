import { readFileSync } from 'fs';
const input = readFileSync('day7.txt', 'utf8');
const lines = input.split(/\r?\n/);
const numbers = lines[0].split(',').map(Number);
const min = Math.min(...numbers), max = Math.max(...numbers);
console.log('min: ' + min + ' max: ' + max);
const array = [...Array(max - min + 1).keys()].map(i => i + min);

function part1() {
    let sums = [];
    array.forEach(target => {
        let sum = 0;
        numbers.forEach(num => {
            sum += Math.abs(num - target);
        });
        sums.push(sum);
    });
    let minSum = Math.min(...sums);
    console.log('minSum: ' + minSum + ' target:' + (min + sums.indexOf(minSum)));
}

function part2() {
    let sums = [];
    array.forEach(target => {
        let sum = 0;
        numbers.forEach(num => {
            sum += ([...Array(Math.abs(num - target) + 1).keys()]).reduce((a, b) => a + b);
        });
        sums.push(sum);
    });
    let minSum = Math.min(...sums);
    console.log('minSum: ' + minSum + ' target:' + (min + sums.indexOf(minSum)));
}

part1();
part2();