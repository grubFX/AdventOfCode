import { readFileSync } from 'fs';
const input = readFileSync('day2.txt', 'utf8')
const lines = input.split(/\r?\n/)

let depth = 0, aim = 0, forward = 0;
lines.forEach(line => {
    var arr = line.split(' ');
    const num = Number(arr[1]);
    switch (arr[0]) {
        case "down":
            aim += num;
            break;
        case "up":
            aim -= num;
            break;
        case "forward":
            forward += num;
            depth += aim * num;
            break;
    }
});
console.log(depth * forward);