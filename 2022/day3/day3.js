import { readFileSync } from 'fs';
const input = readFileSync('day3.txt', 'utf8');
const lines = input.split(/\r?\n/);

function part1() {
    let sum = 0;
    lines.forEach(line => {
        sum += LUT(presentInBoth(
            line.substring(0, line.length / 2),
            line.substring(line.length / 2)));
    });
    console.log(`sum: ${sum}`);
}

function presentInBoth(a, b) {
    var setB = new Set(b);
    return [...new Set(a)].filter(x => setB.has(x));
}

function LUT(char) {
    let str = char.toString();
    if (str.match(/[a-z]/)) { // 1..26
        return str.charCodeAt(0) - 96;
    } else if (str.match(/[A-Z]/)) { // 27..52
        return str.charCodeAt(0) - 65 + 27;
    }
}

part1();