import { readFileSync } from 'fs';
const input = readFileSync('day10.txt', 'utf8')
const lines = input.split(/\r?\n/)
let values = []

function fill() {
    let X = 1
    lines.forEach(line => {
        let parts = line.split(" ")
        switch (parts[0]) {
            case "noop":
                values.push(X)
                break

            case "addx":
                values.push(X, X)
                X += Number(parts[1])
                break
        }
    })
}

function calc(ticks) {
    let sum = 0
    for (let i = 0; i < values.length; i++) {
        if (ticks.includes(i)) {
            sum += values[i - 1] * i
        }
    }
    console.log("sum: " + sum)
}

function draw() {
    const dispLen = 40
    let xVal, str
    for (let i = 0; i < values.length / dispLen; i++) {
        str = ""
        for (let j = 0; j < dispLen; j++) {
            xVal = values[i * dispLen + j]
            if (j == xVal || j == xVal - 1 || j == xVal + 1) {
                str += "█"
            } else {
                str += " "
            }
        }
        console.log(str)
    }
}

fill()
calc([20, 60, 100, 140, 180, 220])
draw()