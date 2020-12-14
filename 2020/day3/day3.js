const fs = require('fs')
const input = fs.readFileSync('2020/day3/day3.txt', 'utf8')
const lines = input.split(/\r?\n/)
let width = lines[0].length, result = 0, index = 0
for (let line of lines) {
    if (line.charAt(index) == '#') result++
    index = (index + 3) % width;
}
console.log(result); 