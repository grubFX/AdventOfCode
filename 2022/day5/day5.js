import { readFileSync } from 'fs';
const input = readFileSync('day5.txt', 'utf8');
const header = input.split(/\r?\n/, 8);
const instructions = input.split(/\r?\n/).slice(10);
let map = new Map();

function readHeader() {
    for (let i = 1; i <= 9; i++) {
        map[i] = [];
    }

    let char = '';
    for (let line = 7; line >= 0; line--) {
        for (let i = 1; i <= 9; i++) {
            char = header[line].charAt(4 * i - 3);
            if (char.match(/[A-Z]/)) {
                map[i].push(char)
            }
        }
    }
}

function applyInstructionsPart1() {
    instructions.forEach(instruction => {
        let parts = instruction.split(" ");
        for (let i = 0; i < Number(parts[1]); i++) {
            map[Number(parts[5])].push(map[Number(parts[3])].pop())
        }
    });
}

function applyInstructionsPart2() {
    instructions.forEach(instruction => {
        let parts = instruction.split(" ");
        let toMove = map[Number(parts[3])].splice(-Number(parts[1]))
        map[Number(parts[5])].push(...toMove)
    });
}

function peekAtEnds() {
    let output = "";
    for (let i = 1; i <= 9; i++) {
        output += map[i].slice(-1)
    }
    return output;
}

readHeader()
applyInstructionsPart1()
console.log("part1: " + peekAtEnds())

readHeader()
applyInstructionsPart2()
console.log("part2: " + peekAtEnds())