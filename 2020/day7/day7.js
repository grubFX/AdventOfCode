const fs = require('fs')
const lines = fs.readFileSync('2020/day7/day7.txt', 'utf8').split(/\n/)

var ruleList = [];
for (var line of lines) {
    var parts = line.split('contain')
    var words = parts[0].split(' ')
    var key = words[0] + words[1]

    var sets = parts[1].split(',')
    var containedBags = [];
    for (var set of sets) {
        words = set.trim().split(' ')
        var containedBag = {
            amount: words[0],
            name: words[1] + words[2]
        }
        containedBags.push(containedBag);
    }
    ruleList.push({
        key,
        containedBags
    })
}

