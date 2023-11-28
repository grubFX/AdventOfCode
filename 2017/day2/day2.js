import { readFileSync } from 'fs';
const input = readFileSync('day2.txt', 'utf8');
const lines = input.split('\n');

function part1() {
    var sum = 0;
    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].split('\t');
        var min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;
        for (var j = 0; j < line.length; j++) {
            var num = parseInt(line[j]);
            if (num < min) {
                min = num;
            }
            if (num > max) {
                max = num;
            }
        }
        //console.log(`min: ${min}, max: ${max}, diff: ${max - min}`);
        sum += (max - min);
    }
    console.log(`checksum: ${sum}`);
}

part1();
