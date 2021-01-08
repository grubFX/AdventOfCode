const fs = require('fs')
const input = fs.readFileSync('2020/day5/day5.txt', 'utf8')
const lines = input.split(/\r?\n/)

var seatIds = [];
for (var line of lines) {
    var c0 = line.charAt(0) == 'B' ? 64 : 0;
    var c1 = line.charAt(1) == 'B' ? 32 : 0;
    var c2 = line.charAt(2) == 'B' ? 16 : 0;
    var c3 = line.charAt(3) == 'B' ? 8 : 0;
    var c4 = line.charAt(4) == 'B' ? 4 : 0;
    var c5 = line.charAt(5) == 'B' ? 2 : 0;
    var c6 = line.charAt(6) == 'B' ? 1 : 0;

    var c7 = line.charAt(7) == 'R' ? 4 : 0;
    var c8 = line.charAt(8) == 'R' ? 2 : 0;
    var c9 = line.charAt(9) == 'R' ? 1 : 0;

    var row = c0 + c1 + c2 + c3 + c4 + c5 + c6;
    var seatID = row * 8 + c7 + c8 + c9;
    seatIds.push(seatID);
}
console.log((seatIds.sort(function (a, b) { return b - a }))[0]);
