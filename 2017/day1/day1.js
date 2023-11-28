import { readFileSync } from 'fs';
const input = readFileSync('day1.txt', 'utf8');

function part1() {
    var sum = 0;

    for (var i = 0; i < input.length; i++) {
        // if the current char is the same as the next character, add it
        if (input[i] == input[i + 1]) {
            sum += parseInt(input[i]);
        }
        // if the last character matches the first character, add it
        if (i == input.length - 1 && input[i] == input[0]) {
            sum += parseInt(input[i]);
        }
    }
    console.log(`sum: ${sum}`);
}

part1();