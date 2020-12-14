const fs = require('fs')
const inputList = fs.readFileSync('2020/day2/day2.txt', 'utf8')
const lines = inputList.split(/\r?\n/)
var result = 0, split = [], range = [], char, count
for (let line of lines) {
    split = line.split(' ')
    range = split[0].split('-')
    char = split[1].slice(0, -1)
    count = split[2].charAt(Number(range[0]) - 1) == char ? 1 : 0 +
        split[2].charAt(Number(range[1]) - 1) == char ? 1 : 0
    if (count == 1) result++
}
console.log(result); 