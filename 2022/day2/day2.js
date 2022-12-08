import { readFileSync } from 'fs';
const input = readFileSync('day2.txt', 'utf8');
const lines = input.split(/\r?\n/);

function part1() {
    let chars = [], sum = 0;
    lines.forEach(line => {
        chars = line.split(' ');
        sum += beats(chars[0], chars[1]);
    });
    console.log(`sum: ${sum}`);
}

function beats(other, mine) {
    switch (other) {
        case 'A':
            switch (mine) {
                case 'X':
                    return 1 + 3;
                case 'Y':
                    return 2 + 6;
                case 'Z':
                    return 3 + 0;
            }
            break;

        case 'B':
            switch (mine) {
                case 'X':
                    return 1 + 0;
                case 'Y':
                    return 2 + 3;
                case 'Z':
                    return 3 + 6;
            }
            break;

        case 'C':
            switch (mine) {
                case 'X':
                    return 1 + 6;
                case 'Y':
                    return 2 + 0;
                case 'Z':
                    return 3 + 3;
            }
            break;
    }
}

part1();