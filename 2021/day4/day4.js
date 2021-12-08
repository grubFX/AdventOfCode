import { readFileSync } from 'fs';
const input = readFileSync('day4.txt', 'utf8')
const lines = input.split(/\r?\n/)

let numbers = lines[0].split(',');
let fields = [];

for (var i = 1; i < lines.length - 7; i += 6) {
    var field = new Array(5);
    for (var j = 0; j < 5; j += 1) {
        field[j] = [];
        lines[i + j + 1].trim().split(/\ +/).forEach(num => {
            field[j].push(Number(num));
        });
    }
    fields.push(field);
}

let winnerField = null, winningNumber;
for (var i = 0; i < numbers.length && !winnerField; i++) {
    for (var j = 0; j < fields.length && !winnerField; j++) {
        markAndCheck(numbers[i], fields[j]);
    }
}

let sum = 0;
for (var i = 0, j = 0; i < 5; i += 1) {
    for (var j = 0; j < 5; j += 1) {
        sum += winnerField[i][j] >= 0 ? winnerField[i][j] : 0;
    }
}
console.log(sum * winningNumber);

function markAndCheck(toMark, field) {
    if (winnerField) return;

    // FIXME creating these arrays over and over for every field and for
    // every number pretty is ineffecient
    let lineSums = new Array(5).fill(0), colSums = new Array(5).fill(0);
    for (var i = 0; i < 5; i += 1) {
        for (var j = 0; j < 5; j += 1) {
            if (field[i][j] >= 0 && field[i][j] == toMark) {
                field[i][j] *= -1;
            }

            if (field[i][j] < 0) {
                lineSums[i] += 1;
                colSums[j] += 1;
            }
        }

        if (lineSums[i] == 5 || colSums[i] == 5) {
            winnerField = field;
            winningNumber = toMark;
        }
    }
}
