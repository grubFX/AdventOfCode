const fs = require('fs')
const inputList = fs.readFileSync('2020/day2/day2.txt', 'utf8')
const lines = inputList.split(/\r?\n/)
var result = 0, split = [], range = [], count
for (let line of lines) {
    split = line.split(' ')
    range = split[0].split('-')
    count = (split[2].match(new RegExp(split[1].slice(0, -1), "g")) || []).length
    if (count >= Number(range[0]) && count <= Number(range[1])) {
        result++
    }
}
console.log(result); 