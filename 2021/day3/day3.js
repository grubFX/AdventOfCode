import { readFileSync } from 'fs';
const input = readFileSync('day3.txt', 'utf8')
const lines = input.split(/\r?\n/)

let lineLen = lines[0].length, sums = new Array(lineLen).fill(0);
lines.forEach(line => {
    for (var i = 0; i < lineLen; i++) {
        sums[i] += (parseInt(line, 2) & (1 << i)) >> i;
    }
});

let MSBs = 0;
for (var i = 0; i < lineLen; i++) {
    if (sums[i] > lines.length / 2) {
        MSBs = MSBs | (1 << i);
    }
}
console.log((MSBs >>> 0) * (~MSBs & ((1 << lineLen) - 1)));