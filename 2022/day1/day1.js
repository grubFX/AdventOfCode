import { readFileSync } from 'fs';
const input = readFileSync('day1.txt', 'utf8');
const lines = input.split(/\r?\n/).map(Number);

function part1() {
    let sum = 0, maxSum = 0;
    lines.forEach(number => {
        if (number) {
            sum += number;
        } else {
            maxSum = Math.max(maxSum, sum);
            sum = 0;
        }
    });
    console.log(`maxSum: ${maxSum}`);
}

function part2() {
    let sum = 0, sums = [].map(Number);
    lines.forEach(number => {
        if (number) {
            sum += number;
        } else {
            sums.push(sum);
            sum = 0;
        }
    });
    sums.sort((a, b) => (a - b)).reverse();
    console.log(`sum max3: ${sums[0] + sums[1] + sums[2]}`);
}

part1();
part2();