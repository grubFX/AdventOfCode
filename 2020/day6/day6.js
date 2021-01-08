const fs = require('fs')
const lines = fs.readFileSync('2020/day6/day6.txt', 'utf8').split(/§/)

var sum = 0;
for (var line of lines) {
    var unique = [...new Set(line.split(''))];
    sum += unique.length;
}
console.log(sum);