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

var goodColors = ["shinygold"];
do {
    var lastCnt = goodColors.length
    for (var rule of ruleList) {
        if (canContain(rule) && !goodColors.includes(rule.key)) {
            goodColors.push(rule.key)
        }
    }
} while (lastCnt != goodColors.length)
console.log(`good colors: ${(goodColors.length - 1)}`) // -1 for itself
console.log(`contained bags: ${containsBags("shinygold") - 1}`) // -1 for itself

function canContain(rule) {
    var canContain = false;
    for (var bag of rule.containedBags) {
        for (var col of goodColors) {
            if (col == bag.name)
                canContain = true
        }
    }
    return canContain;
}

function containsBags(color) {
    var rules = ruleList.filter((r) => (r.key == color))
    if (rules == null || rules.length == 0)
        return 1

    let sum = 1
    for (var rule of rules) {
        for (var bag of rule.containedBags) {
            if (bag.amount != 'no')
                sum += Number(bag.amount) * containsBags(bag.name)
        }
    }
    return sum
}
