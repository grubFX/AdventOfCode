import { readFileSync } from 'fs';
import Point from '@studiomoniker/point';
const input = readFileSync('day9.txt', 'utf8');
const lines = input.split(/\r?\n/)
let parts = [], head = new Point(0, 0), tail = new Point(0, 0)
const headMap = new Map([["0/0", 1]]), tailMap = new Map([["0/0", 1]])

lines.forEach(line => {
    parts = line.split(" ")
    let val = Number(parts[1])
    for (let i = 0; i < val; i++) {
        switch (parts[0]) {
            case "R": head.x++; break
            case "L": head.x--; break
            case "U": head.y++; break
            case "D": head.y--; break
        }
        writeToMap(head, headMap)
        calcTail()
    }
});

function calcTail() {
    let dist = head.getDistance(tail)
    if (~~dist > 1) { // consider sqrt(2) as 1
        if (head.x > tail.x) tail.x++
        else if (head.x < tail.x) tail.x--

        if (head.y > tail.y) tail.y++
        else if (head.y < tail.y) tail.y--

        writeToMap(tail, tailMap)
    }
}

function writeToMap(point, map) {
    const coordStr = `${point.x}/${point.y}`
    if (map.has(coordStr)) {
        map.set(coordStr, map.get(coordStr) + 1)
    } else {
        map.set(coordStr, 1)
    }
}

console.log(`# of unique fields visited by head: ${headMap.size} / tail: ${tailMap.size}`)