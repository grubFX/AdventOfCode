import { readFileSync } from 'fs';
const input = readFileSync('day5.txt', 'utf8')
const lines = input.split(/\r?\n/)
const size = 1000;

part1();
part2();

function part1() {
    let valid = [];
    lines.forEach(line => {
        let parts = line.split('->');
        let [x1, y1] = parts[0].trim().split(',').map(Number);
        let [x2, y2] = parts[1].trim().split(',').map(Number);
        if (x1 == x2 || y1 == y2) {
            valid.push({ start: { x: x1, y: y1 }, end: { x: x2, y: y2 } });
        }
    });

    let map = Array(size).fill(0).map(() => Array(size).fill(0));
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
    console.log(map.reduce((a, b) => a.filter(x => x > 1).concat(b.filter(x => x > 1))).length);
}

function part2() {
    let map = Array(size).fill(0).map(() => Array(size).fill(0));
    lines.forEach(line => {
        let parts = line.split('->');
        let [x1, y1] = parts[0].trim().split(',').map(Number);
        let [x2, y2] = parts[1].trim().split(',').map(Number);

        if (x1 == x2) {
            for (let i = Math.min(y1, y2); i <= Math.max(y1, y2); i++) {
                map[x1][i] += 1;
            }
        } else if (y1 == y2) {
            for (let i = Math.min(x1, x2); i <= Math.max(x1, x2); i++) {
                map[i][y1] += 1;
            }
        } else { // diagonal
            let xInc = x1 < x2 ? 1 : -1;
            let yInc = y1 < y2 ? 1 : -1;
            for (let x = x1, y = y1; true; x += xInc, y += yInc) {
                map[x][y] += 1;
                if (x == x2 || y == y2) {
                    break;
                }
            }
        }
    });
    console.log(map.reduce((a, b) => a.filter(x => x > 1).concat(b.filter(x => x > 1))).length);
}