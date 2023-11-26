import { readFileSync } from 'fs';
const input = readFileSync('day6.txt', 'utf8');

function isUnique(str) {
    return new Set(str).size == str.length;
}

function main(windowSize) {
    let offset = 0;
    while (offset < input.length - windowSize) {
        if (isUnique(input.slice(offset, offset + windowSize))) {
            break
        } else {
            offset++
        }
    }
    console.log(offset + windowSize)
}

main(4)
main(14)