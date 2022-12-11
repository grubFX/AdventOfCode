import { readFileSync } from 'fs';
import Point from '@studiomoniker/point';
const input = readFileSync('day9.txt', 'utf8');
const lines = input.split(/\r?\n/)
let parts = [], head = new Point(0, 0), tail = new Point(0, 0)
const headMap = new Map(), tailMap = new Map()

lines.forEach(line => {
    parts = line.split(" ")
    let val = Number(parts[1])
    switch (parts[0]) {
        case "R":
            head.x += val
            break
        case "L":
            head.x -= val
            break
        case "U":
            head.y += val
            break
        case "D":
            head.y -= val
            break
    }
    writeToMap(head, headMap)
    calcTail()
});

function calcTail() {
    if (head.getDistance(tail) > 1) {
        if (head.x > tail.x) tail.x++
        else if (head.x < tail.x) tail.x--
        
        if (head.y > tail.y) tail.y++
        else if (head.y < tail.y) tail.y--
    }
    writeToMap(tail, tailMap)
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
