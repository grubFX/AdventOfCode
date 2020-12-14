const fs = require('fs')
const inputList = fs.readFileSync('2020/day1/day1.txt', 'utf8')
const lines = inputList.split(/\r?\n/);
var result = -1;
var run = true;
for (i = 0; run && i < lines.length; i++) {
    for (j = 0; run && j < lines.length; j++) {
        for (k = 0; run && k < lines.length; k++) {
            if (Number(lines[i]) + Number(lines[j]) + Number(lines[k]) == 2020) {
                result = Number(lines[i]) * Number(lines[j]) * Number(lines[k]);
                run = false;
            }
        }
    }
}
console.log(result); 