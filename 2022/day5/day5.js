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

function applyInstructions() {
    instructions.forEach(instruction => {
        let parts = instruction.split(" ");
        for (let i = 0; i < Number(parts[1]); i++) {
            map[Number(parts[5])].push(map[Number(parts[3])].pop())
        }
    });
}

function peekAtEnds() {
    let output = "";
    for (let i = 1; i <= 9; i++) {
        output += map[i].slice(-1)
    }
    console.log(output)
}

readHeader()
applyInstructions()
peekAtEnds()