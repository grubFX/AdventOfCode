import { readFileSync } from 'fs';
const input = readFileSync('day5.txt', 'utf8')
const lines = input.split(/\r?\n/)

let valid = [];
lines.forEach(line => {
    let parts = line.split('->');
    let [x1, y1] = parts[0].trim().split(',');
    let [x2, y2] = parts[1].trim().split(',');
    if (x1 == x2 || y1 == y2) {
        valid.push({ start: { x: x1, y: y1 }, end: { x: x2, y: y2 } });
    }
});

let map = Array(1000).fill(0).map(() => Array(1000).fill(0));
valid.forEach(line => {
    if (line.start.x == line.end.x) {
        for (let i = Math.min(line.start.y, line.end.y); i <= Math.max(line.start.y, line.end.y); i++) {
            map[line.start.x][i] += 1;
        }
    } else if (line.start.y == line.end.y) {
        for (let i = Math.min(line.start.x, line.end.x); i <= Math.max(line.start.x, line.end.x); i++) {
            map[i][line.start.y] += 1;
        }
    }
});
console.log(map.reduce((a, b) => a.concat(b)).filter(x => x > 1).length);
