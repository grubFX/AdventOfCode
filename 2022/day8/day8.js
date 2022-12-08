import { readFileSync } from 'fs';
const input = readFileSync('day8.txt', 'utf8');
const lines = input.split(/\r?\n/);
let map = Array.from({ length: lines.length }, () => [])
let visibilities = Array.from({ length: lines.length }, () => [])

function readMap() {
    for (let l = 0; l < lines.length; l++) {
        for (let c = 0; c < lines[0].length; c++) {
            map[l][c] = Number(lines[l].charAt(c))
        }
    }
}

function checkEach() {
    let sum = 0;
    for (let l = 0; l < lines.length; l++) {
        for (let c = 0; c < lines[0].length; c++) {
            sum = 0
            sum += isVisibleFromLeft(l, c) ? 1 : 0
            sum += isVisibleFromRight(l, c) ? 2 : 0
            sum += isVisibleFromTop(l, c) ? 4 : 0
            sum += isVisibleFromBottom(l, c) ? 8 : 0
            visibilities[l][c] = sum;
        }
    }

    sum = 0
    visibilities.forEach(line => {
        sum += line.filter(x => x > 0).length
    });
    console.log(`number of visible: ${sum}`)
}

function isVisibleFromLeft(line, column) {
    if (column <= 0) {
        return true;
    }
    return (Math.max(...(map[line].slice(0, column))) < map[line][column]);
}

function isVisibleFromRight(line, column) {
    if (column >= map[0].length) {
        return true;
    }
    return (Math.max(...(map[line].slice(column + 1))) < map[line][column]);
}

function isVisibleFromTop(line, column) {
    if (line <= 0) {
        return true;
    }
    let colVals = map.map(x => x[column]).slice(0, line)
    return (Math.max(...colVals) < map[line][column])
}

function isVisibleFromBottom(line, column) {
    if (line >= map.length) {
        return true;
    }
    let colVals = map.map(x => x[column]).slice(line + 1)
    return (Math.max(...colVals) < map[line][column]);
}

readMap()
checkEach()
