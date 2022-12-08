import { readFileSync } from 'fs';
const input = readFileSync('day4.txt', 'utf8');
const lines = input.split(/\r?\n/);

function main() {
    let sets = [], a = [], b = [], overlappingSum = 0, containedSum = 0, overlapping, contained;
    lines.forEach(line => {
        sets = line.split(",")
        a = sets[0].split("-"), b = sets[1].split("-");
        [overlapping, contained] = overlappingOrContained(Number(a[0]), Number(a[1]), Number(b[0]), Number(b[1]))
        overlappingSum += overlapping;
        containedSum += contained;
    });
    console.log(`overlapping: ${overlappingSum}, fully contained: ${containedSum}`)
}

function overlappingOrContained(min0, max0, min1, max1) {
    let a = Array.from({ length: max0 - min0 + 1 }, (_, i) => i + min0).map(Number);
    let b = Array.from({ length: max1 - min1 + 1 }, (_, i) => i + min1).map(Number);
    let overlap = a.filter(x => b.includes(x));
    let isContained =
        (overlap[0] == min0 && overlap[overlap.length - 1] == max0) ||
        (overlap[0] == min1 && overlap[overlap.length - 1] == max1);
    return [overlap.length > 0, isContained]
}

main()