const fs = require('fs')
const input = fs.readFileSync('2020/day3/day3.txt', 'utf8')
const lines = input.split(/\r?\n/)
let width = lines[0].length, results = [0, 0, 0, 0, 0], indices = [0, 0, 0, 0, 0], i
for (let i = 0; i < lines.length; i++) {
    if (lines[i].charAt(indices[0]) == '#') results[0]++
    indices[0] = ++indices[0] % width;

    if (lines[i].charAt(indices[1]) == '#') results[1]++
    indices[1] = (indices[1] + 3) % width;

    if (lines[i].charAt(indices[2]) == '#') results[2]++
    indices[2] = (indices[2] + 5) % width;

    if (lines[i].charAt(indices[3]) == '#') results[3]++
    indices[3] = (indices[3] + 7) % width;

    if (i % 2 == 0) {
        if (lines[i].charAt(indices[4]) == '#') results[4]++
        indices[4] = ++indices[4] % width;
    }
}
console.log(results.reduce((a, b) => a * b)); 