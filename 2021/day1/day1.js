const fs = require('fs')
const input = fs.readFileSync('day1.txt', 'utf8')
const lines = input.split(/\r?\n/)

var inc = 0, dec = 0, lastLine = null;
lines.forEach(line => {
    if (lastLine) {
        if (Number(line) < lastLine) {
            dec++;
        }
        else if (Number(line) > lastLine) {
            inc++;
        }
    }
    lastLine = Number(line);
});
console.log(inc);