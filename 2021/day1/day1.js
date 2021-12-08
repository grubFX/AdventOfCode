import { readFileSync } from 'fs';
const input = readFileSync('day1.txt', 'utf8')
const lines = input.split(/\r?\n/)

let inc = 0, lastLine = null, window = new Array(lines.length);
for (var i = 0; i < lines.length - 3; i++) { // exclude last two
    window[i] = Number(lines[i]) + Number(lines[i + 1]) + Number(lines[i + 2]);
    if (lastLine && window[i] > lastLine) {
        inc += 1;
    }
    lastLine = window[i];
};

console.log(inc);