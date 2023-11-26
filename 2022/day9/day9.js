import { readFileSync } from 'fs';
import Point from '@studiomoniker/point';
const input = readFileSync('day9.txt', 'utf8');
const lines = input.split(/\r?\n/)
let headMap, tailMap

function main(length) {
    headMap = new Map([["0/0", 1]]), tailMap = new Map([["0/0", 1]])
    let parts = [], snake = [length = length]
    for (let i = 0; i < length; i++) {
        snake[i] = new Point(0, 0)
    }

    lines.forEach(line => {
        parts = line.split(" ")
        let val = Number(parts[1])
        for (let i = 0; i < val; i++) {
            switch (parts[0]) {
                case "R": snake[0].x++; break
                case "L": snake[0].x--; break
                case "U": snake[0].y++; break
                case "D": snake[0].y--; break
            }
            writeToMap(snake[0], headMap)

            for (let j = 0; j < length - 1; j++) {
                calcTail(snake[j], snake[j + 1])
            }

            writeToMap(snake[length - 1], tailMap)
        }
    });
    console.log(`length: ${length}, unique fields visited by head: ${headMap.size} / tail: ${tailMap.size}`)
}

function calcTail(head, tail) {
    let dist = head.getDistance(tail)
    if (~~dist > 1) { // consider sqrt(2) as 1
        if (head.x > tail.x) tail.x++
        else if (head.x < tail.x) tail.x--

        if (head.y > tail.y) tail.y++
        else if (head.y < tail.y) tail.y--
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

main(2)
main(10)
